import Design from "../models/Design.js";
import User from "../models/User.js";
import { resetDailyLimits } from "../utils/resetDailyLimits.js";


// ============================
// Save Design
// ============================

export const saveDesign = async (req, res) => {
  try {
    console.log("SAVE DESIGN BODY:", req.body);

    const {
      clerkId,
      title,
      category,
      prompt,
      enhancedPrompt,
      imageURL,
      details,
    } = req.body;

    // Validation
    if (!clerkId) {
      return res.status(400).json({
        success: false,
        message: "Clerk ID is required",
      });
    }

    if (!imageURL) {
      return res.status(400).json({
        success: false,
        message: "Image URL is required",
      });
    }

    // Find user
    let user = await User.findOne({ clerkId });

if (!user) {

  user = await User.create({

    clerkId,

    name:
      req.body.name || "Unknown User",

    email:
      req.body.email || `${clerkId}@placeholder.local`,

    totalDesigns: 0,

    saveUsed: 0,

  });
  
}

    // Reset daily counters if it's a new day
    resetDailyLimits(user);

    const SAVE_LIMIT = 4;

    if (user.saveUsed >= SAVE_LIMIT) {
      return res.status(403).json({
        success: false,
        message: "Daily save limit reached (4/4). Please try again tomorrow.",
      });
    }

    // Save design
    const design = await Design.create({
      clerkId,
      title: title || "AI Invitation Design",
      category: category || "general",
      prompt: prompt || "",
      enhancedPrompt: enhancedPrompt || "",
      imageURL,
      details: details || {},
    });

    // Update user usage
    user.saveUsed += 1;
    user.totalDesigns += 1;

    await user.save();

    console.log("SAVED DESIGN:", design);

    return res.status(201).json({
      success: true,
      message: "Design saved successfully",
      remainingSaves: SAVE_LIMIT - user.saveUsed,
      design,
    });

  } catch (error) {
    console.error("Save Design Error:", error);

    return res.status(500).json({
      success: false,
      message: "Design save failed",
      error: error.message,
    });
  }
};


// ============================
// Get All Designs
// ============================

export const getDesigns = async(req,res)=>{

    try{


        const designs = await Design.find()

        .sort({

            createdAt:-1

        });



        res.status(200).json({

            success:true,

            designs

        });



    }
    catch(error){


        console.error(error);


        res.status(500).json({

            success:false,

            message:"Failed to fetch designs"

        });


    }

};




// ============================
// Get User Designs
// ============================
export const getUserDesigns = async (req, res) => {
  try {
    const { userId } = req.params;

    const designs = await Design.find({
      clerkId: userId,
    })
      .sort({ createdAt: -1 })
      .limit(100);

    return res.status(200).json({
      success: true,
      designs,
    });
  } catch (error) {
    console.error("Fetch User Designs Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch user designs",
    });
  }
};



// ============================
// Delete Design
// ============================

export const deleteDesign = async(req,res)=>{


    try{


        await Design.findByIdAndDelete(
            req.params.id
        );



        res.status(200).json({

            success:true,

            message:"Design deleted"

        });


    }
    catch(error){


        console.error(
            "Delete Error:",
            error
        );


        res.status(500).json({

            success:false,

            message:"Delete failed"

        });


    }


};