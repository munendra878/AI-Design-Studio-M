import axios from "axios";


const API = axios.create({

  baseURL: "http://localhost:5000/api",

  timeout: 120000,

  headers: {

    "Content-Type": "application/json",

  },

});



// AI Services

const aiService = {



  // ==========================
  // Generate Enhanced Prompt
  // ==========================

  generatePrompt(data) {


    const limitedData = {


      ...data,


      prompt:
        data.prompt
        ?.substring(0, 2000)
        || "",


    };


    return API.post(

      "/ai/prompt",

      limitedData

    );

  },




  // ==========================
  // Generate AI Image
  // ==========================

  generateImage(data) {


    const limitedData = {


      ...data,


      prompt:
        data.prompt
        ?.substring(0, 1500)
        || "",


    };


    return API.post(

      "/ai/generate-image",

      limitedData

    );

  },




  // ==========================
  // Save Generated Design
  // ==========================

  saveDesign(data) {


    const saveData = {


      ...data,


      title:
        data.title || "AI Design",


      category:
        data.category || "general",


      prompt:
        data.prompt
        ?.substring(0,1500)
        || "",


      enhancedPrompt:
        data.enhancedPrompt
        ?.substring(0,1500)
        || "",


    };


    return API.post(

      "/designs",

      saveData

    );

  },




  // ==========================
  // Get All Designs
  // ==========================

  getDesigns() {


    return API.get(

      "/designs"

    );

  },




  // ==========================
  // Get User Designs
  // ==========================

  getUserDesigns(userId) {


    return API.get(

      `/designs/user/${userId}`

    );

  },




  // ==========================
  // Delete Design
  // ==========================

  deleteDesign(id) {


    return API.delete(

      `/designs/${id}`

    );

  }


};




// Global Axios Error Handler

API.interceptors.response.use(

  (response)=> response,


  (error)=> {


    if(error.code === "ECONNABORTED") {


      console.error(

        "API Request Timeout"

      );


    }


    if(error.response) {


      console.error(

        "API Error:",

        error.response.data

      );


    }


    else {


      console.error(

        "Network Error:",

        error.message

      );


    }


    return Promise.reject(error);


  }

);



export default aiService;