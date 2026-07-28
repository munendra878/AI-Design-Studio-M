import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter
} from "react-router-dom";

import {
  ClerkProvider
} from "@clerk/clerk-react";


import App from "./App";
import { ThemeProvider } from "./components/ThemeContext";

import "./index.css";



const clerkPubKey =
import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;



if(!clerkPubKey){

  throw new Error(
    "Missing Clerk Publishable Key"
  );

}



ReactDOM.createRoot(
  document.getElementById("root")
).render(


<React.StrictMode>


<ClerkProvider

publishableKey={clerkPubKey}

>


<BrowserRouter>

 <ThemeProvider>


<App />

</ThemeProvider>

</BrowserRouter>


</ClerkProvider>


</React.StrictMode>


);