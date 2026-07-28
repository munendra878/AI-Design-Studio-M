import {
  Download,
  RefreshCw,
  Save,
  ImageIcon,
} from "lucide-react";

import { useRef } from "react";
import html2canvas from "html2canvas";

import "./ImagePreview.css";


export default function ImagePreview({
  imageUrl,
  loading,
  onRegenerate,
  onSave,
  category,
  details = {},
}) {

  const cardRef = useRef(null);


  const downloadImage = async () => {

    if (!cardRef.current) return;

    try {

      const canvas = await html2canvas(
        cardRef.current,
        {
          useCORS:true,
          scale:3,
          backgroundColor:null,
        }
      );


      const link = document.createElement("a");

      link.download =
      `${category || "ai-card"}-design.png`;

      link.href =
      canvas.toDataURL("image/png");

      link.click();


    } catch(error){

      console.log(error);

      alert("Download failed");

    }

  };

// ==============================
// Save Rendered Design
// ==============================

const saveRenderedDesign = async () => {

  if (!cardRef.current) return;


  try {


    const canvas = await html2canvas(
      cardRef.current,
      {
        useCORS:true,
        scale:3,
        backgroundColor:null,
      }
    );


    const finalImage =
      canvas.toDataURL(
        "image/png"
      );


    console.log(
      "FINAL SAVED IMAGE:",
      finalImage
    );


    // send complete card image
    onSave(finalImage);



  }
  catch(error){

    console.log(
      "Save Render Error:",
      error
    );


    alert(
      "Save failed"
    );

  }

};

  return (

    <div className="image-preview">


      <div className="preview-top">

        <h2>
          <ImageIcon size={22}/>
          AI Generated Design
        </h2>

      </div>



      {
        loading ? (

          <div className="image-loading">

            <div className="loader"></div>

            <h3>
              Generating Design...
            </h3>

            <p>
              Please wait while AI creates your design.
            </p>

          </div>


        )


        : imageUrl ? (


          <>


          <div
          className="card-preview"
          ref={cardRef}
          >


           <img
  src={imageUrl}
  alt="AI Generated Design"
  className="generated-image"
  crossOrigin="anonymous"
  onLoad={() => console.log("Image loaded")}
  onError={(e) => {
    console.log("Image failed:", imageUrl);
    console.log(e);
  }}
/>




<div className="card-overlay">



{/* ======================
        WEDDING
====================== */}

{category === "wedding" && (
  <div className="overlay-content wedding-card">
    <div className="card-border">
      <h1 className="card-title">Wedding Invitation</h1>

      <div className="flourish top-flourish"></div>

      <h1 className="bride-name">{details.brideName}</h1>

      <h2 className="ampersand">Weds</h2>

      <h1 className="groom-name">{details.groomName}</h1>

      <div className="flourish middle-flourish"></div>

      <p className="venue">
        <strong>Venue:</strong> {details.venue}
      </p>

      <p className="datetime">
        <strong>Date:</strong> {details.eventDate}
      </p>

      <p className="datetime">
        <strong>Time:</strong> {details.eventTime}
      </p>

      <div className="flourish bottom-flourish"></div>
    </div>
  </div>
)}


{/* ======================
        BIRTHDAY
====================== */}
{category === "birthday" && (

<div className="overlay-content birthday-card">

    <div className="birthday-frame">

        <div className="birthday-badge">
            🎉 HAPPY BIRTHDAY 🎉
        </div>

        <h1 className="birthday-name">
            {details.birthdayName || "Birthday Person"}
        </h1>

        <div className="age-circle">
            <span>{details.birthdayAge || "18"}</span>
            <small>Years</small>
        </div>

        <div className="birthday-divider"></div>

        <div className="birthday-info">

            <div className="birthday-row">
                📍 {details.birthdayVenue || "Birthday Venue"}
            </div>

            <div className="birthday-row">
                📅 {details.birthdayDate || "01 January 2026"}
            </div>

            <div className="birthday-row">
                ⏰ {details.eventTime || "7:00 PM"}
            </div>

        </div>

        <div className="birthday-footer">
            🎂 Join Us For A Memorable Celebration 🎂
        </div>

    </div>

</div>

)}



{/* ======================
        BABY SHOWER
====================== */}
{category === "babyshower" && (
  <div className="overlay-content baby-card">
    <div className="card-border">
      <h1 className="baby-title">👶 Baby Shower</h1>

      <div className="divider"></div>

      <h2 className="parent-name">
        {details.parentName}
      </h2>

      <p className="baby-gender">
        <strong>Celebrating:</strong> {details.babyGender}
      </p>

      <p className="baby-venue">
        <strong>Venue:</strong> {details.babyVenue}
      </p>

      <p className="baby-date">
        <strong>Date:</strong> {details.babyDate}
      </p>

      <p className="baby-time">
        <strong>Time:</strong> {details.eventTime}
      </p>

      <div className="divider"></div>
    </div>
  </div>
)}


{/* ======================
        VALENTINE
====================== */}

{category === "valentine" && (
  <div className="overlay-content valentine-card">

    <div className="love-border">

      <div className="heart-icon">
        ❤️
      </div>

      <h1 className="occasion">
        {details.occasion || "Valentine's Day"}
      </h1>


      <div className="couple-name">

        <span className="person">
          {details.senderName || "Your Name"}
        </span>


        <span className="big-heart">
          ❤
        </span>


        <span className="person">
          {details.receiverName || "Partner"}
        </span>

      </div>


      <div className="divider"></div>


      <p className="love-message">
        {details.title || 
        "Forever together, always in love ❤️"}
      </p>


      <div className="divider"></div>


      <p className="love-footer">
        With Love Forever 💕
      </p>


    </div>

  </div>
)}




{/* ======================
        BUSINESS
====================== */}
{category === "business" && (

<div className="overlay-content business-card">

    <div className="business-frame">

        <h1 className="business-name">
            {details.businessName || "Business Name"}
        </h1>

        <h2 className="job-title">
            {details.jobTitle || "Software Engineer"}
        </h2>

        <div className="divider"></div>

        <div className="business-details">

            <div className="detail-row">
                <span>🏢</span>
                <span>{details.companyName || "Company Name"}</span>
            </div>

            <div className="detail-row">
                <span>📞</span>
                <span>{details.phone || "+91 9876543210"}</span>
            </div>

            <div className="detail-row">
                <span>✉️</span>
                <span>{details.email || "example@email.com"}</span>
            </div>

            <div className="detail-row">
                <span>🌐</span>
                <span>{details.website || "www.example.com"}</span>
            </div>

            <div className="detail-row">
                <span>📍</span>
                <span>{details.address || "Business Address"}</span>
            </div>

        </div>

    </div>

</div>

)}


{/* ======================
        POSTER
====================== */}

{category === "poster" && (
  <div className="overlay-content poster-card">

    <div className="poster-frame">

      <div className="poster-badge">
        ⭐ SPECIAL EVENT ⭐
      </div>

      <h1 className="poster-title">
        {details.posterTitle || "Grand Opening"}
      </h1>

      <h2 className="poster-offer">
        {details.offer || "50% OFF"}
      </h2>

      <div className="poster-divider"></div>

      <div className="poster-info">

        <div className="poster-row">
          📍 {details.posterLocation || "Your Location"}
        </div>

        <div className="poster-row">
          📅 {details.posterDate || "01 January 2026"}
        </div>

        <div className="poster-row">
          📞 {details.posterPhone || "+91 9876543210"}
        </div>

      </div>

    </div>

  </div>
)}


{/* ======================
        FESTIVAL
====================== */}
{category === "festival" && (
  <div className="overlay-content festival-card">

    <div className="card-border">

      <div className="festival-icon">
        ✨
      </div>

      <h1 className="festival-name">
        {details.festivalName}
      </h1>

      <h2 className="festival-title">
        {details.festivalTitle}
      </h2>

      <div className="divider"></div>

      <p className="festival-message">
        {details.festivalMessage}
      </p>

      <div className="divider"></div>

      <h3 className="festival-sender">
        ❤️
        <br />
        {details.festivalSender}
      </h3>

    </div>

  </div>
)}



</div>


</div>

<div className="image-buttons">


<button
className="download-btn"
onClick={downloadImage}
>

<Download size={18}/>

Download

</button>



<button
className="regen-btn"
onClick={onRegenerate}
>

<RefreshCw size={18}/>

Regenerate

</button>

<button
className="save-btn"
onClick={saveRenderedDesign}
>

<Save size={18}/>

Save Design

</button>

</div>


</>


)

:

(

<div className="empty-image">

<ImageIcon size={80}/>

<h3>
No Design Generated
</h3>


<p>
Generate prompt and create AI design.
</p>


</div>

)

}


</div>

);

}

