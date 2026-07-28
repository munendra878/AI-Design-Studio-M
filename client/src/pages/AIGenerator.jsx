import { useState } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategorySelector from "../components/CategorySelector";
import PromptForm from "../components/PromptForm";
import PromptPreview from "../components/PromptPreview";
import ImagePreview from "../components/ImagePreview";
import ImageGenerateButton from "../components/ImageGenerateButton";


import aiService from "../services/aiService";

import "./Generate.css";


export default function AIGenerator() {
const { user } = useUser();

const [selectedCategory, setSelectedCategory] =
  useState("");


// User entered prompt
const [prompt, setPrompt] =
  useState("wedding");


// Ollama generated prompt
const [generatedPrompt, setGeneratedPrompt] =
  useState("");


const [loading, setLoading] =
  useState(false);


const [imageUrl, setImageUrl] =
  useState("");


const [imageLoading, setImageLoading] =
  useState(false);


const [details, setDetails] =
  useState({});



  // ===============================
  // Receive Prompt Form Data
  // ===============================

  const handleFormData = (data)=>{

    setDetails(data);

  };



  // ===============================
  // Generate AI Image
  // ===============================

  const handleGenerateImage = async () => {

  if (!generatedPrompt.trim()) {
    alert("Please generate AI Prompt first.");
    return;
  }

  try {

    setImageLoading(true);

    const response = await aiService.generateImage({
      prompt: generatedPrompt,
      invitationData: {
        category: selectedCategory,
        ...details
      }
    });

    if (response.data.success) {

      console.log("Backend Response:", response.data);
      console.log("Image URL:", response.data.image);

      setImageUrl(response.data.image);

    } else {

      alert(
        response.data.message ||
        "Image generation failed."
      );

    }

  } catch (error) {

    console.error("Image Generate Error:", error);

    alert(
      error.response?.data?.message ||
      "Image generation failed."
    );

  } finally {

    setImageLoading(false);

  }

};


// logout

const navigate = useNavigate();

const handleLogout = () => {
  // Remove stored login data
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Redirect to login page
  navigate("/dashboard");
};

  // ===============================
  // Regenerate
  // ===============================

  const handleRegenerate = ()=>{

    handleGenerateImage();

  };




  // ===============================
  // Save Design
  // ===============================
const handleSaveDesign = async (finalImage) => {

  if (!user) {

    alert("Please login first");
    return;

  }


  if (!finalImage) {

    alert("Image not generated yet");
    return;

  }


  try {

const saveData = {

  clerkId: user.id,

  name:
    user.fullName || "User",

  email:
    user.primaryEmailAddress?.emailAddress || "",


  title:
    `${selectedCategory} Design`,


  category:
    selectedCategory,


  prompt:
    prompt || "",


  enhancedPrompt:
    generatedPrompt || "",


  imageURL:
    finalImage,


  details:
    details || {}

};


    console.log(
      "Saving Design Data:",
      saveData
    );



    const response =
      await aiService.saveDesign(
        saveData
      );



    console.log(
      "Save Response:",
      response.data
    );



    if(response.data.success){

    alert("✅ Design saved successfully.");
    }


  }
  catch(error){


    console.error(
      " ❌ Save Error:",
      error.response?.data || error
    );


     alert(
      error.response?.data?.message ||
      " ❌ Save failed"
    );


  }

};

return (
   <>
        <Navbar />

        
 <div className="generate-page">

{/* Page Header */}
<header className="generate-header">

  <div className="generate-header-content">

    <h1 className="generate-title">
      ✨ Create Amazing AI Designs
    </h1>
    
  </div>

</header>
    {/* Rest of your page */}

<div className="generate-content">
      {/* Category */}
      <div className="generate-card">

        <div className="section-title">
        <h2>
          Select Category </h2>
        </div>

        <CategorySelector
          selectedCategory={selectedCategory}
          setSelectedCategory={(value) => {
            setSelectedCategory(value);
            setGeneratedPrompt("");
            setImageUrl("");
            setDetails({});
          }}
        />

      </div>

      {/* Form */}
      <div className="generate-card">

        <div className="section-title">
          <h2> Enter Details </h2>
        </div>

        <PromptForm
          category={selectedCategory}
          generatedPrompt={generatedPrompt}
          setGeneratedPrompt={setGeneratedPrompt}
          loading={loading}
          setLoading={setLoading}
          onFormData={handleFormData}
        />

      </div>

      {/* Prompt */}
      <div className="generate-card">

        <div className="section-title">
          AI Generated Prompt
        </div>

        <PromptPreview
          generatedPrompt={generatedPrompt}
          loading={loading}
        />

      </div>

      {/* Generate Button */}
      <div className="generate-button-area">

        <ImageGenerateButton
          loading={imageLoading}
          onClick={handleGenerateImage}
          text="✨ Generate AI Image"
          disabled={!generatedPrompt}
        />

      </div>

      {/* Image */}
      <div className="generate-card">

        <div className="section-title">
          Generated Design
        </div>

        <ImagePreview
          imageUrl={imageUrl}
          loading={imageLoading}
          onRegenerate={handleRegenerate}
          onSave={handleSaveDesign}
          category={selectedCategory}
          details={details}
        />

      </div>

    </div>
              
  </div>

  
        <Footer />
      </>
);
}