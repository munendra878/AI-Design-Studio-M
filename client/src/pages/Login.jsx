import { SignIn, SignedIn } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from './../components/Navbar';

function Login() {
  return (
    <>
    <Navbar/>
      <SignedIn>
        <Navigate to="/dashboard" replace />
      </SignedIn>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#f8f9ff",
        }}
      >
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/register"
          forceRedirectUrl="/dashboard"
        />
      </div>

      <Footer/>
    </>
  );
}

export default Login;