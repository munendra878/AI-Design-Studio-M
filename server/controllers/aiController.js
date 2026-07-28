// import ollama from "../config/ollama.js";
import { Ollama } from "ollama";

const ollama = new Ollama({
  host: process.env.OLLAMA_URL
});

// ==============================
// Generate Enhanced Prompt
// ==============================

export const generatePrompt = async (req, res) => {
  try {

    const {
  // Common
  category,
  title,
  theme,
  style,
  language,
  primaryColor,
  secondaryColor,

  // Wedding
  brideName,
  groomName,
  venue,
  eventDate,
  eventTime,

  // Birthday
  birthdayName,
  birthdayAge,
  birthdayVenue,
  birthdayDate,

  // Baby Shower
  parentName,
  babyGender,
  babyVenue,
  babyDate,

  // Valentine
  senderName,
  receiverName,
  occasion,

  // Business
  businessName,
  jobTitle,
  companyName,
  phone,
  email,
  website,
  address,
  qrOption,

  // Poster
  posterType,
  posterTitle,
  offer,
  posterLocation,
  posterDate,
  posterPhone,

  // Festival
  festivalName,
  festivalTitle,
  recipientName,
  festivalSender,
  festivalMessage,

} = req.body;

    // ============================================
    // Category Prompt
    // ============================================

   let categoryPrompt = "";
   // Festival Decoration
  let festivalDecor = "";

switch ((festivalName || "").toLowerCase()) {
  case "diwali":
    festivalDecor = "diyas, rangoli, fireworks, marigold flowers";
    break;

  case "holi":
    festivalDecor = "gulal colors, water splashes, colorful powder";
    break;

  case "navratri":
    festivalDecor = "garba, dandiya sticks, Goddess Durga";
    break;

  case "ganesh chaturthi":
    festivalDecor = "Lord Ganesha, modak, lotus flowers";
    break;

  case "janmashtami":
    festivalDecor = "Lord Krishna, flute, peacock feathers";
    break;

  case "raksha bandhan":
    festivalDecor = "rakhi, flowers, gifts";
    break;

  case "eid":
    festivalDecor = "crescent moon, mosque, lanterns";
    break;

  case "christmas":
    festivalDecor = "Christmas tree, snowflakes, gifts, bells";
    break;

  case "new year":
    festivalDecor = "fireworks, balloons, confetti";
    break;

  case "independence day":
    festivalDecor = "Indian flag, Ashoka Chakra, India Gate";
    break;

  case "republic day":
    festivalDecor = "Indian flag, Ashoka Chakra, Republic Day Parade";
    break;

  default:
    festivalDecor = "traditional festive decorations";
}

switch (category) {
// ==========================================
// Wedding Invitation
// ==========================================
case "wedding":
  categoryPrompt = `
Create a luxury Indian wedding invitation card.

Bride Name:
${brideName || "Bride"}

Groom Name:
${groomName || "Groom"}

Venue:
${venue || "Wedding Venue"}

Wedding Date:
${eventDate || "Date"}

Wedding Time:
${eventTime || "Time"}

Theme:
${theme || "Royal"}

Style:
${style || "Luxury"}

Language:
${language || "English"}

Primary Color:
${primaryColor || "Gold"}

Secondary Color:
${secondaryColor || "Royal Blue"}

Design Requirements:
- Luxury Indian wedding invitation
- Elegant floral border
- Traditional mandap
- Royal palace background
- Decorative golden frame
- Premium floral arrangements
- Traditional Indian motifs
- Luxury ornaments
- Soft decorative lighting
- Premium typography style
- Empty center area for invitation details
- Display bride name "${brideName || ""}"
- Display groom name "${groomName || ""}"
- Display venue "${venue || ""}"
- Display wedding date "${eventDate || ""}"
- Display wedding time "${eventTime || ""}"

Additional Instructions:
${title || "None"}
`;
break;
// ==========================================
// Birthday Invitation
// ==========================================
case "birthday":
  categoryPrompt = `
Create a luxury birthday invitation card.

Birthday Person:
${birthdayName || "Birthday Person"}

Age:
${birthdayAge || "Age"}

Venue:
${birthdayVenue || "Venue"}

Date:
${birthdayDate || "Date"}

Time:
${eventTime || "Time"}

Theme:
${theme || "Birthday Celebration"}

Style:
${style || "Luxury"}

Language:
${language || "English"}

Primary Color:
${primaryColor || "Blue"}

Secondary Color:
${secondaryColor || "White"}

Design Requirements:
- Luxury birthday invitation
- Birthday cake
- Balloons
- Confetti
- Party decorations
- Floral border
- Elegant golden frame
- Premium typography
- Rich celebration background
- Empty center area for invitation details
- Display birthday person's name "${birthdayName || ""}"
- Display age "${birthdayAge || ""}"
- Display venue "${birthdayVenue || ""}"
- Display date "${birthdayDate || ""}"
- Display time "${eventTime || ""}"

Additional Instructions:
${title || "None"}
`;
break;
    
// ==========================================
// Baby Shower Invitation
// ==========================================
case "babyshower":
  categoryPrompt = `
Create a luxury baby shower invitation card.

Parent Name(s):
${parentName || "Parent Name"}

Baby Gender:
${babyGender || "Surprise"}

Venue:
${babyVenue || "Venue"}

Date:
${babyDate || "Date"}

Time:
${eventTime || "Time"}

Theme:
${theme || "Cute Teddy"}

Style:
${style || "Luxury"}

Language:
${language || "English"}

Primary Color:
${primaryColor || "Pink"}

Secondary Color:
${secondaryColor || "White"}

Design Requirements:
- Luxury baby shower invitation
- Cute teddy bears
- Baby footprints
- Baby toys
- Balloons
- Clouds and stars
- Floral decorations
- Soft pastel colors
- Elegant golden frame
- Premium typography
- Empty center area for invitation details
- Display parent name "${parentName || ""}"
- Display baby gender "${babyGender || ""}"
- Display venue "${babyVenue || ""}"
- Display date "${babyDate || ""}"
- Display time "${eventTime || ""}"

Additional Instructions:
${title || "None"}
`;
break;
// ==========================================
// Valentine's Day Card
// ==========================================
case "valentine":
  categoryPrompt = `
Create a luxury Valentine's Day greeting card.

Sender Name:
${senderName || "Your Name"}

Receiver Name:
${receiverName || "Partner"}

Occasion:
${occasion || "Valentine's Day"}

Date:
${eventDate || "Date"}

Theme:
${theme || "Romantic"}

Style:
${style || "Luxury"}

Language:
${language || "English"}

Primary Color:
${primaryColor || "Red"}

Secondary Color:
${secondaryColor || "Pink"}

Special Message:
${title || "May our love last forever."}

Design Requirements:
- Luxury romantic greeting card
- Elegant floral border
- Red roses and heart decorations
- Soft glowing background
- Romantic lighting
- Decorative golden frame
- Premium typography style
- Empty center area for greeting text
- Display sender name "${senderName || ""}"
- Display receiver name "${receiverName || ""}"
- Display occasion "${occasion || ""}"

Additional Instructions:
${title || "None"}
`;
break;
  
// ==========================================
// Business Card
// ==========================================
case "business":
  categoryPrompt = `
Create a modern luxury business card background.

Full Name: ${businessName || "Your Name"}
Job Title: ${jobTitle || "Job Title"}
Company Name: ${companyName || "Company"}
Phone: ${phone || "Phone Number"}
Email: ${email || "Email"}
Website: ${website || "Website"}
Office Address: ${address || "Address"}
QR Code: ${qrOption || "Yes"}

Theme: ${theme || "Corporate"}
Style: ${style || "Minimal"}

Primary Color: ${primaryColor || "Black"}
Secondary Color: ${secondaryColor || "Gold"}

Design Requirements:
- Premium geometric elements
- Luxury corporate branding
- Elegant business card layout
- Modern minimal design
- Professional typography
- Logo placeholder
- QR code placeholder
- Front and back business card concept
- Display full name "${businessName || ""}"
- Display job title "${jobTitle || ""}"
- Display company name "${companyName || ""}"
- Display phone "${phone || ""}"
- Display email "${email || ""}"
- Display website "${website || ""}"

Additional Instructions:
${title || "None"}
`;
break;
// ==========================================
// Promotional Poster
// ==========================================
case "poster":
  categoryPrompt = `
Create a premium promotional poster.

Poster Type: ${posterType || "Business Promotion"}

Poster Title: ${posterTitle || "Grand Opening"}

Offer / Tagline:
${offer || "Special Offer"}

Location:
${posterLocation || "Location"}

Event Date:
${posterDate || "Date"}

Contact Number:
${posterPhone || "Phone"}

Theme:
${theme || "Modern"}

Style:
${style || "Bold"}

Primary Color:
${primaryColor || "Orange"}

Secondary Color:
${secondaryColor || "Black"}


Design Requirements:
- Modern promotional poster
- Attractive background
- Premium typography
- Large headline
- Decorative graphic elements
- Eye-catching layout
- Empty space for poster details
- Display poster title "${posterTitle || ""}"
- Display offer "${offer || ""}"
- Display location "${posterLocation || ""}"
- Display event date "${posterDate || ""}"
- Display phone number "${posterPhone || ""}"


Additional Instructions:
${title || "None"}
`;
break;
// ==========================================
// Festival Greeting Card
// ==========================================
case "festival":
  categoryPrompt = `
Create a luxury festival greeting card.

Festival Name:
${festivalName || "Festival"}

Greeting Title:
${festivalTitle || "Happy Festival"}

Recipient Name:
${recipientName || "Family & Friends"}

Sender Name:
${festivalSender || "Your Name"}

Greeting Message:
${festivalMessage || ""}

Theme:
${theme || "Traditional"}

Style:
${style || "Luxury"}

Language:
${language || "English"}

Primary Color:
${primaryColor || "Gold"}

Secondary Color:
${secondaryColor || "Red"}

Festival Decorations:
${festivalDecor}

Design Requirements:
- Luxury festival greeting card
- Elegant floral border
- Festival symbols: ${festivalDecor}
- Premium artistic background
- Decorative golden frame
- Rich festive colors
- Elegant typography
- Empty center area for greeting content
- Display greeting title "${festivalTitle || ""}"
- Display recipient name "${recipientName || ""}"
- Display sender name "${festivalSender || ""}"
- Display festival name "${festivalName || ""}"

Additional Instructions:
${title || "None"}
`;
break;

  default:
    categoryPrompt = `
Create a premium invitation card background with an elegant decorative border and empty center area for text.
`;
}

    // ============================================
    // Final Prompt for Ollama
    // ============================================

    const userPrompt = `
You are an expert AI prompt engineer.

Generate exactly ONE concise AI image prompt.

${categoryPrompt}

Rules:

- Maximum 50 words.
- Return ONLY the prompt.
- No headings.
- No bullet points.
- No explanations.
- No markdown.
- Do not mention 8K, Ultra HD, cinematic, print-ready, realistic lighting, sharp focus, camera settings, or aspect ratio.
- Describe only the background artwork.
- Include decorative elements, color palette, typography style, and an empty center area for invitation text.
- The prompt must be suitable for FLUX or Stable Diffusion.

Return only the final prompt.
`;
 const limitedUserPrompt = userPrompt.substring(0, 2000);

const result = await ollama.chat({

  model: "llama3.2",

  messages: [

    {
      role: "user",

      content: limitedUserPrompt,

    }

  ],


  options: {

    num_predict: 200,

    temperature: 0.7,

  }

});


 const enhancedPrompt = result.message.content
  .trim()
  .substring(0, 800);   // Final response character limit


  return res.status(200).json({

    success: true,

    enhancedPrompt,

  });


} catch (error) {


  console.error("Ollama Error:", error);


  return res.status(500).json({

    success: false,

    message: "Prompt generation failed",

  });


}
}
 // ==============================
// Generate AI Image
// ==============================
export const generateImage = async (req, res) => {

  try {

    let { prompt, invitationData } = req.body;


    // ==============================
    // Validation
    // ==============================

    if (!prompt || prompt.trim() === "") {

      return res.status(400).json({

        success: false,
        message: "Prompt is required.",

      });

    }


    // Limit prompt length
    prompt = prompt.substring(0, 1500);



    console.log("================================");
    console.log("Generating AI Image...");
    console.log(prompt);



    const cleanPrompt = prompt
      .replace(/^["']|["']$/g, "")
      .trim();



    // ==============================
    // Seed generation
    // ==============================

    const seed = Math.floor(
      Math.random() * 2147483647
    );



    const imageUrl =
      `https://image.pollinations.ai/prompt/${encodeURIComponent(cleanPrompt)}` +
      `?model=flux` +
      `&width=768` +
      `&height=1024` +
      `&seed=${seed}` +
      `&nologo=true`;



    console.log("Generated URL:");
    console.log(imageUrl);



    // ==============================
    // Fetch with timeout
    // ==============================

    const controller = new AbortController();

    const timeout = setTimeout(() => {

      controller.abort();

    }, 60000); // 60 seconds



    const response = await fetch(imageUrl, {

      signal: controller.signal,

    });


    clearTimeout(timeout);



    if (!response.ok) {

      return res.status(500).json({

        success:false,
        message:"AI image generation failed.",

      });

    }



    // ==============================
    // Validate image
    // ==============================

    const contentType = response.headers.get(
      "content-type"
    );


    if (
      !contentType ||
      !contentType.startsWith("image")
    ) {

      return res.status(500).json({

        success:false,
        message:"AI returned invalid image.",

      });

    }



    // ==============================
    // Convert image
    // ==============================

    const arrayBuffer =
      await response.arrayBuffer();



    // Limit image size
    const imageSizeMB =
      arrayBuffer.byteLength / 1024 / 1024;



    if (imageSizeMB > 10) {

      return res.status(500).json({

        success:false,
        message:"Generated image is too large.",

      });

    }



    const base64 =
      Buffer.from(arrayBuffer)
      .toString("base64");



    const dataUrl =
      `data:${contentType};base64,${base64}`;



    return res.status(200).json({

      success:true,

      image:dataUrl,

      prompt:cleanPrompt,

      invitationData:
        invitationData || {},

    });



  } catch(error) {


    console.error(
      "Image Generation Error:",
      error
    );


    if(error.name === "AbortError") {

      return res.status(504).json({

        success:false,

        message:
        "AI image generation timeout.",

      });

    }



    return res.status(500).json({

      success:false,

      message:
      "Image generation failed.",

      error:error.message,

    });


  }

};