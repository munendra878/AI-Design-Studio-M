import { useState } from "react";
import { Sparkles } from "lucide-react";

import aiService from "../services/aiService";

import "./PromptForm.css";

import ImageGenerateButton from "./ImageGenerateButton";


export default function PromptForm({

  category,
  generatedPrompt,
  setGeneratedPrompt,
  loading,
  setLoading,
  onFormData

}) {


/* ==============================
   COMMON FIELDS
============================== */

const [title,setTitle] = useState("");
const [theme,setTheme] = useState("");
const [style,setStyle] = useState("Luxury");
const [language,setLanguage] = useState("English");

const [primaryColor,setPrimaryColor] = useState("");
const [secondaryColor,setSecondaryColor] = useState("");



/* ==============================
   WEDDING
============================== */

const [brideName,setBrideName] = useState("");
const [groomName,setGroomName] = useState("");
const [venue,setVenue] = useState("");

const [eventDate,setEventDate] = useState("");
const [eventTime,setEventTime] = useState("");



/* ==============================
   BIRTHDAY
============================== */

const [birthdayName,setBirthdayName] = useState("");
const [birthdayAge,setBirthdayAge] = useState("");

const [birthdayVenue,setBirthdayVenue] = useState("");
const [birthdayDate,setBirthdayDate] = useState("");



/* ==============================
   BABY SHOWER
============================== */

const [parentName,setParentName] = useState("");
const [babyGender,setBabyGender] = useState("");

const [babyVenue,setBabyVenue] = useState("");
const [babyDate,setBabyDate] = useState("");



/* ==============================
   VALENTINE
============================== */

const [senderName,setSenderName] = useState("");
const [receiverName,setReceiverName] = useState("");

const [occasion,setOccasion] =
useState("Valentine's Day");



/* ==============================
   BUSINESS
============================== */

const [businessName,setBusinessName] = useState("");
const [jobTitle,setJobTitle] = useState("");

const [companyName,setCompanyName] = useState("");

const [phone,setPhone] = useState("");
const [email,setEmail] = useState("");

const [website,setWebsite] = useState("");
const [address,setAddress] = useState("");

const [qrOption,setQrOption] = useState("No");



/* ==============================
   POSTER
============================== */

const [posterType,setPosterType] =
useState("Business Promotion");

const [posterTitle,setPosterTitle] = useState("");

const [offer,setOffer] = useState("");

const [posterLocation,setPosterLocation] = useState("");

const [posterDate,setPosterDate] = useState("");

const [posterPhone,setPosterPhone] = useState("");





/* ==============================
   FESTIVAL
============================== */

const [festivalName,setFestivalName] =
useState("Diwali");

const [festivalTitle,setFestivalTitle] = useState("");

const [recipientName,setRecipientName] = useState("");

const [festivalSender,setFestivalSender] = useState("");

const [festivalMessage,setFestivalMessage] = useState("");





// =================================
// SEND DATA TO AIGENERATOR
// =================================


const sendFormData = ()=>{


if(onFormData){


onFormData({

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
festivalMessage

});


}


};




// =================================
// GENERATE PROMPT
// =================================


const handleGenerate = async()=>{


try{


setLoading(true);


// send data to parent
sendFormData();



const payload={


category,

title,

theme,

style,

language,

primaryColor,

secondaryColor,


brideName,
groomName,
venue,
eventDate,
eventTime,


birthdayName,
birthdayAge,
birthdayVenue,
birthdayDate,


parentName,
babyGender,
babyVenue,
babyDate,


senderName,
receiverName,
occasion,


businessName,
jobTitle,
companyName,

phone,
email,
website,
address,
qrOption,


posterType,
posterTitle,
offer,
posterLocation,
posterDate,
posterPhone,


festivalName,
festivalTitle,
recipientName,
festivalSender,
festivalMessage


};



const response =
await aiService.generatePrompt(payload);



setGeneratedPrompt(
response.data.enhancedPrompt
);



}

catch(error){


console.log(error);

alert(
"Unable to generate prompt"
);


}

finally{


setLoading(false);


}


};

return (

<div className="prompt-container">


<div className="prompt-header">

<Sparkles size={22}/>

<h2>
AI Prompt Generator
</h2>

</div>

      {/* -------------------------------- */}
      {/* Wedding Form */}
      {/* Part 1A.2 */}
      {/* -------------------------------- */}

     {category === "wedding" && (
  <div className="form-section">

    <h3 className="form-title">
      💒 Wedding Invitation Details
    </h3>

    <div className="form-grid">

      <div className="form-group">
        <label>Bride Name</label>
        <input
          type="text"
          placeholder="Priya Sharma"
          value={brideName}
          onChange={(e)=>setBrideName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Groom Name</label>
        <input
          type="text"
          placeholder="Rahul Patel"
          value={groomName}
          onChange={(e)=>setGroomName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Venue</label>
        <input
          type="text"
          placeholder="Jaipur Palace"
          value={venue}
          onChange={(e)=>setVenue(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e)=>setEventDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Time</label>
        <input
          type="time"
          value={eventTime}
          onChange={(e)=>setEventTime(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Theme</label>
        <input
          type="text"
          placeholder="Royal Golden"
          value={theme}
          onChange={(e)=>setTheme(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Style</label>

        <select
          value={style}
          onChange={(e)=>setStyle(e.target.value)}
        >
          <option>Luxury</option>
          <option>Royal</option>
          <option>Traditional</option>
          <option>Modern</option>
          <option>Minimal</option>
          <option>Floral</option>
          <option>Vintage</option>
        </select>
      </div>

      <div className="form-group">
        <label>Language</label>

        <select
          value={language}
          onChange={(e)=>setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Gujarati</option>
          <option>Marathi</option>
        </select>
      </div>

      <div className="form-group">
        <label>Primary Color</label>

        <select
          value={primaryColor}
          onChange={(e)=>setPrimaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>Gold</option>
          <option>Royal Blue</option>
          <option>Red</option>
          <option>Cream</option>
          <option>Emerald Green</option>
          <option>Maroon</option>
          <option>Rose Gold</option>
        </select>
      </div>

      <div className="form-group">
        <label>Secondary Color</label>

        <select
          value={secondaryColor}
          onChange={(e)=>setSecondaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>White</option>
          <option>Ivory</option>
          <option>Black</option>
          <option>Silver</option>
          <option>Beige</option>
        </select>
      </div>

    </div>

    <div className="form-group">
      <label>Additional Details</label>

      <textarea
        rows={5}
        placeholder="Example:
Royal palace wedding,
Golden floral decorations,
Mandap with flowers,
Elegant typography,
Bride and Groom names highlighted,
Traditional Indian luxury style."
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
    </div>

  </div>
)}

      {/* -------------------------------- */}
      {/* Birthday Form */}
      {/* Part 1B */}
      {/* -------------------------------- */}

      {category === "birthday" && (
  <div className="form-section">

    <h3 className="form-title">
      🎂 Birthday Invitation Details
    </h3>

    <div className="form-grid">

      <div className="form-group">
        <label>Birthday Person Name</label>
        <input
          type="text"
          placeholder="Aarav Patel"
          value={birthdayName}
          onChange={(e) => setBirthdayName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          placeholder="25"
          value={birthdayAge}
          onChange={(e) => setBirthdayAge(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Venue</label>
        <input
          type="text"
          placeholder="Grand Celebration Hall"
          value={birthdayVenue}
          onChange={(e) => setBirthdayVenue(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={birthdayDate}
          onChange={(e) => setBirthdayDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Time</label>
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Theme</label>
        <input
          type="text"
          placeholder="Cartoon, Luxury, Floral..."
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Style</label>

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option>Modern</option>
          <option>Luxury</option>
          <option>Minimal</option>
          <option>Kids</option>
          <option>Floral</option>
          <option>Vintage</option>
        </select>
      </div>

      <div className="form-group">
        <label>Language</label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Gujarati</option>
          <option>Marathi</option>
        </select>
      </div>

      <div className="form-group">
        <label>Primary Color</label>

        <select
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>Blue</option>
          <option>Pink</option>
          <option>Purple</option>
          <option>Gold</option>
          <option>Red</option>
          <option>Yellow</option>
        </select>
      </div>

      <div className="form-group">
        <label>Secondary Color</label>

        <select
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>White</option>
          <option>Black</option>
          <option>Silver</option>
          <option>Cream</option>
        </select>
      </div>

    </div>

    <div className="form-group">
      <label>Additional Details</label>

      <textarea
        rows={5}
        placeholder="Example:
Luxury birthday invitation,
Balloons,
Confetti,
Birthday cake,
Golden typography,
Soft lighting,
Premium celebration theme."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

  </div>
)}


     {category === "babyshower" && (
  <div className="form-section">

    <h3 className="form-title">
      👶 Baby Shower Invitation Details
    </h3>

    <div className="form-grid">

      <div className="form-group">
        <label>Parent Name(s)</label>
        <input
          type="text"
          placeholder="Priya & Rahul"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Baby Gender</label>

        <select
          value={babyGender}
          onChange={(e) => setBabyGender(e.target.value)}
        >
          <option value="">Select</option>
          <option>Boy</option>
          <option>Girl</option>
          <option>Surprise</option>
        </select>
      </div>

      <div className="form-group">
        <label>Venue</label>
        <input
          type="text"
          placeholder="Royal Banquet Hall"
          value={babyVenue}
          onChange={(e) => setBabyVenue(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={babyDate}
          onChange={(e) => setBabyDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Time</label>
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Theme</label>
        <input
          type="text"
          placeholder="Cute Teddy, Floral, Clouds..."
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Style</label>

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option>Luxury</option>
          <option>Modern</option>
          <option>Minimal</option>
          <option>Floral</option>
          <option>Cute</option>
          <option>Vintage</option>
        </select>
      </div>

      <div className="form-group">
        <label>Language</label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Gujarati</option>
          <option>Marathi</option>
        </select>
      </div>

      <div className="form-group">
        <label>Primary Color</label>

        <select
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>Pink</option>
          <option>Blue</option>
          <option>Lavender</option>
          <option>Mint Green</option>
          <option>Cream</option>
          <option>Yellow</option>
        </select>
      </div>

      <div className="form-group">
        <label>Secondary Color</label>

        <select
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>White</option>
          <option>Beige</option>
          <option>Gold</option>
          <option>Silver</option>
        </select>
      </div>

    </div>

    <div className="form-group">
      <label>Additional Details</label>

      <textarea
        rows={5}
        placeholder="Example:
Cute teddy bears,
Baby footprints,
Floral decorations,
Soft pastel colors,
Elegant typography,
Premium baby shower invitation."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

  </div>
)}   

{category === "valentine" && (
  <div className="form-section">

    <h3 className="form-title">
      ❤️ Valentine's Card Details
    </h3>

    <div className="form-grid">

      <div className="form-group">
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Rahul"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Partner Name</label>
        <input
          type="text"
          placeholder="Priya"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Occasion</label>

        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Valentine's Day</option>
          <option>Anniversary</option>
          <option>Proposal</option>
          <option>Love Letter</option>
          <option>Engagement</option>
        </select>
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Theme</label>
        <input
          type="text"
          placeholder="Romantic, Rose Garden..."
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Style</label>

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option>Luxury</option>
          <option>Romantic</option>
          <option>Modern</option>
          <option>Minimal</option>
          <option>Floral</option>
        </select>
      </div>

      <div className="form-group">
        <label>Language</label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Gujarati</option>
          <option>Marathi</option>
        </select>
      </div>

      <div className="form-group">
        <label>Primary Color</label>

        <select
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>Red</option>
          <option>Pink</option>
          <option>Rose Gold</option>
          <option>Purple</option>
          <option>White</option>
        </select>
      </div>

      <div className="form-group">
        <label>Secondary Color</label>

        <select
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>White</option>
          <option>Gold</option>
          <option>Black</option>
          <option>Silver</option>
        </select>
      </div>

    </div>

    <div className="form-group">
      <label>Special Message</label>

      <textarea
        rows={5}
        placeholder="Write a heartfelt Valentine's message..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

  </div>
)}

    {/* ---------------business----------------- */}


           {category === "business" && (
  <div className="form-section">

    <h3 className="form-title">
      💼 Business Card Details
    </h3>

    <div className="form-grid">

      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="John Smith"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Job Title</label>
        <input
          type="text"
          placeholder="Software Engineer"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          placeholder="Tech Solutions Pvt. Ltd."
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="+91 9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Website</label>
        <input
          type="text"
          placeholder="www.example.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Office Address</label>
        <input
          type="text"
          placeholder="Ahmedabad, Gujarat"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Theme</label>
        <input
          type="text"
          placeholder="Corporate, Luxury, Modern"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Style</label>

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option>Corporate</option>
          <option>Modern</option>
          <option>Luxury</option>
          <option>Minimal</option>
          <option>Creative</option>
          <option>Elegant</option>
        </select>
      </div>

      <div className="form-group">
        <label>Primary Color</label>

        <select
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>Blue</option>
          <option>Black</option>
          <option>Navy</option>
          <option>Gold</option>
          <option>Green</option>
          <option>Red</option>
        </select>
      </div>

      <div className="form-group">
        <label>Secondary Color</label>

        <select
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>White</option>
          <option>Silver</option>
          <option>Gray</option>
          <option>Beige</option>
        </select>
      </div>

      <div className="form-group">
        <label>QR Code</label>

        <select
          value={qrOption}
          onChange={(e) => setQrOption(e.target.value)}
        >
          <option>No</option>
          <option>Website</option>
          <option>WhatsApp</option>
          <option>Google Maps</option>
        </select>
      </div>

    </div>

    <div className="form-group">
      <label>Additional Instructions</label>

      <textarea
        rows={5}
        placeholder="Example:
Minimal corporate design,
Premium typography,
Include company logo,
Rounded corners,
Professional layout,
Print-ready."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

  </div>
)}    
        {/* ---------------------------- */}
        {category === "poster" && (
  <div className="form-section">

    <h3 className="form-title">
      📢 AI Poster Generator
    </h3>

    <div className="form-grid">

      <div className="form-group">
        <label>Poster Type</label>

        <select
          value={posterType}
          onChange={(e) => setPosterType(e.target.value)}
        >
          <option>Business Promotion</option>
          <option>Gym Opening</option>
          <option>Restaurant</option>
          <option>Sale Offer</option>
          <option>Event</option>
          <option>Education</option>
          <option>Political Campaign</option>
          <option>Festival Offer</option>
        </select>
      </div>

      <div className="form-group">
        <label>Poster Title</label>
        <input
          type="text"
          placeholder="Grand Opening"
          value={posterTitle}
          onChange={(e) => setPosterTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Offer / Tagline</label>
        <input
          type="text"
          placeholder="50% OFF on Membership"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          placeholder="Ahmedabad"
          value={posterLocation}
          onChange={(e) => setPosterLocation(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={posterDate}
          onChange={(e) => setPosterDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Contact Number</label>
        <input
          type="tel"
          placeholder="+91 9876543210"
          value={posterPhone}
          onChange={(e) => setPosterPhone(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Theme</label>
        <input
          type="text"
          placeholder="Luxury, Modern, Bold..."
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Style</label>

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option>Modern</option>
          <option>Luxury</option>
          <option>Bold</option>
          <option>Minimal</option>
          <option>Creative</option>
          <option>Vintage</option>
        </select>
      </div>

      <div className="form-group">
        <label>Primary Color</label>

        <select
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>Red</option>
          <option>Black</option>
          <option>Blue</option>
          <option>Gold</option>
          <option>Green</option>
          <option>Purple</option>
        </select>
      </div>

      <div className="form-group">
        <label>Secondary Color</label>

        <select
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        >
          <option value="">Select</option>
          <option>White</option>
          <option>Yellow</option>
          <option>Silver</option>
          <option>Gray</option>
        </select>
      </div>

    </div>

    <div className="form-group">
      <label>Poster Description</label>

      <textarea
        rows={5}
        placeholder="Describe the poster design, images, background, typography, icons, lighting, and layout..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

  </div>
)}
          
{/* ================= Festival Card ================= */}

{category === "festival" && (
  <div className="form-section">

    <h3 className="form-title">
      🎆 AI Festival Card Generator
    </h3>

    <div className="form-grid">

      {/* Festival */}
      <div className="form-group">
        <label>Festival</label>

        <select
          value={festivalName}
          onChange={(e) => setFestivalName(e.target.value)}
        >
          <option value="Diwali">Diwali</option>
          <option value="Holi">Holi</option>
          <option value="Navratri">Navratri</option>
          <option value="Ganesh Chaturthi">Ganesh Chaturthi</option>
          <option value="Raksha Bandhan">Raksha Bandhan</option>
          <option value="Janmashtami">Janmashtami</option>
          <option value="Durga Puja">Durga Puja</option>
          <option value="Makar Sankranti">Makar Sankranti</option>
          <option value="Pongal">Pongal</option>
          <option value="Onam">Onam</option>
          <option value="Eid">Eid</option>
          <option value="Christmas">Christmas</option>
          <option value="New Year">New Year</option>
        </select>
      </div>

      {/* Greeting */}
      <div className="form-group">
        <label>Greeting Title</label>

        <input
          type="text"
          placeholder="Happy Diwali"
          value={festivalTitle}
          onChange={(e) => setFestivalTitle(e.target.value)}
        />
      </div>

      {/* Recipient */}
      <div className="form-group">
        <label>Recipient Name</label>

        <input
          type="text"
          placeholder="Family & Friends"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
        />
      </div>

      {/* Sender */}
      <div className="form-group">
        <label>Sender Name</label>

        <input
          type="text"
          placeholder="Munendra"
          value={festivalSender}
          onChange={(e) => setFestivalSender(e.target.value)}
        />
      </div>

      {/* Theme */}
      <div className="form-group">
        <label>Theme</label>

        <input
          type="text"
          placeholder="Royal Traditional"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </div>

      {/* Style */}
      <div className="form-group">
        <label>Design Style</label>

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option value="Luxury">Luxury</option>
          <option value="Traditional">Traditional</option>
          <option value="Modern">Modern</option>
          <option value="Minimal">Minimal</option>
          <option value="Floral">Floral</option>
          <option value="Classic">Classic</option>
          <option value="Elegant">Elegant</option>
        </select>
      </div>

      {/* Language */}
      <div className="form-group">
        <label>Language</label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Marathi">Marathi</option>
          <option value="Tamil">Tamil</option>
          <option value="Telugu">Telugu</option>
          <option value="Kannada">Kannada</option>
        </select>
      </div>

      {/* Primary Color */}
      <div className="form-group">
        <label>Primary Color</label>

        <select
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        >
          <option value="">Choose</option>
          <option value="Gold">Gold</option>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Royal Blue">Royal Blue</option>
          <option value="Green">Green</option>
          <option value="Purple">Purple</option>
          <option value="Pink">Pink</option>
        </select>
      </div>

      {/* Secondary Color */}
      <div className="form-group">
        <label>Secondary Color</label>

        <select
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        >
          <option value="">Choose</option>
          <option value="White">White</option>
          <option value="Cream">Cream</option>
          <option value="Silver">Silver</option>
          <option value="Yellow">Yellow</option>
          <option value="Black">Black</option>
        </select>
      </div>
                
    </div>

    {/* Festival Message */}

    <div className="form-group">

      <label>Festival Message</label>

      <textarea
        rows={6}
        placeholder="May this festival bring happiness, prosperity, peace and good health to you and your family..."
        value={festivalMessage}
        onChange={(e) => setFestivalMessage(e.target.value)}
      />

    </div>

  </div>
)}

 <ImageGenerateButton
        loading={loading}
        onClick={handleGenerate}
        text="Generate AI Prompt"
      />

      {generatedPrompt && (
        <div className="generated-box">
          <h3>✨ Enhanced AI Prompt</h3>

          <textarea
            className="generated-textarea"
            rows={10}
            readOnly
            value={generatedPrompt}
          />
        </div>
      )}

    </div>
  );
}