import { useEffect, useState } from "react";

import { 
  useUser 
} from "@clerk/clerk-react";

import {
  Trash2,
  Image as ImageIcon,
  Download
} from "lucide-react";

import aiService from "../services/aiService";

import Navbar from "../components/Navbar";

import "./MyDesigns.css";
import Footer from "../components/Footer";


export default function MyDesigns(){ 


const {user,isLoaded}=useUser();


const [designs,setDesigns]=useState([]);

const [loading,setLoading]=useState(true);




// ==============================
// Fetch Designs
// ==============================

useEffect(()=>{


if(isLoaded && user){

fetchDesigns();

}


},[isLoaded,user]);

const fetchDesigns = async () => {

  try {

    setLoading(true);

    const res = await aiService.getUserDesigns(
      user.id
    );


    console.log("FULL RESPONSE:", res);


    console.log(
      "API DATA:",
      res.data
    );


    if(res.data.success){

      console.log(
        "DESIGNS ARRAY:",
        res.data.designs
      );


      res.data.designs.forEach((design)=>{

        console.log("IMAGE URL:", design.imageURL);

        console.log("PROMPT:", design.prompt);

        console.log("DETAILS:", design.details);

      });


      setDesigns(
        res.data.designs
      );

    }


  }
  catch(error){

    console.log(
      "Fetch Error:",
      error
    );

  }
  finally{

    setLoading(false);

  }

};

// ==============================
// Delete
// ==============================


const handleDelete=async(id)=>{


if(!window.confirm(
"Delete this design?"
))
return;



try{


await aiService.deleteDesign(id);


setDesigns(prev=>
prev.filter(
item=>item._id!==id
)
);



}
catch(error){

console.log(error);

}


};


// ==============================
// Download
// ==============================

const downloadImage = async (url) => {

  try {

    const response = await fetch(url);

    const blob = await response.blob();

    const blobUrl = window.URL.createObjectURL(blob);


    const a = document.createElement("a");

    a.href = blobUrl;

    a.download = "AI-Invitation.png";


    document.body.appendChild(a);

    a.click();


    document.body.removeChild(a);


    window.URL.revokeObjectURL(blobUrl);


  } catch(error) {

    console.log(
      "Download Error:",
      error
    );

  }

};



if(!isLoaded || loading){


return(


<div className="loading-screen">

  <div className="loader"></div>

  <h2>✨ Loading your designs</h2>

  <div className="loading-dots">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <p>Please wait while we prepare your saved creations.</p>

</div>


);


}


return(

   <>
          <Navbar />


<div className="my-designs-page">


<div className="design-header">


<h1>
🎨 My Designs
</h1>


<p>
Your saved AI generated invitation cards
</p>


</div>


{
designs.length===0 ?


<div className="empty-design">


<ImageIcon size={80}/>


<h2>
No Designs Found
</h2>


<p>
Generate your first AI design and save it here.
</p>


</div>

:


<div className="design-grid">


{

designs.map((design)=>(

<div 
className="design-card"
key={design._id}
>

<div className="image-wrapper">

<img

src={
  design.imageURL 
  ? design.imageURL 
  : "/placeholder.png"
}

alt={
  design.title || "AI Design"
}

className="design-image"


onLoad={()=>{
 console.log(
  "Image Loaded:",
  design.imageURL
 );
}}


onError={(e)=>{

console.log(
 "Image Failed:",
 design.imageURL
);

e.target.src="/placeholder.png";

}}

/>


</div>





<div className="design-info">


<h3>
{
design.title || "AI Invitation"
}
</h3>



<span>
🎨 {design.category || "Invitation"}
</span>




{/* USER PROMPT */}

<p className="design-prompt">

📝 
{
design.prompt 
? design.prompt
: "No prompt saved"
}

</p>





{/* ENHANCED PROMPT */}

<p className="enhanced-prompt">

✨
{
design.enhancedPrompt
? design.enhancedPrompt
: "No enhanced prompt"
}

</p>





{/* DETAILS */}

{

design.details && (

<div className="saved-details">


{
design.details.brideName && (

<p>
👰 Bride:
{design.details.brideName}
</p>

)

}



{
design.details.groomName && (

<p>
🤵 Groom:
{design.details.groomName}
</p>

)

}




{
design.details.venue && (

<p>
📍 Venue:
{design.details.venue}
</p>

)

}



{
design.details.eventDate && (

<p>
📅 Date:
{design.details.eventDate}
</p>

)

}



</div>

)

}


<div className="design-actions">


<button

className="download-btn"

onClick={()=>downloadImage(
design.imageURL
)}

>

<Download size={18}/>

Download

</button>





<button

className="delete-btn"

onClick={()=>handleDelete(
design._id
)}

>

<Trash2 size={18}/>

Delete

</button>



</div>


</div>


</div>

))


}


</div>


}



</div>


        <Footer />
      </>

);


}