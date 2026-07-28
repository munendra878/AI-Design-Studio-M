import { SignUp } from "@clerk/clerk-react";


import Footer from "../components/Footer";
import Navbar from './../components/Navbar';

function Register() {
  return (

    <>
        <Navbar/>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <SignUp
  routing="path"
  path="/register"
  forceRedirectUrl="/dashboard"
  signInUrl="/login"
/>
    </div>

    <Footer/>
        </>
  );
}

export default Register;