import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Terms from "./pages/Terms";
import Dashboard from "./pages/Dashboard";
import AIGenerator from "./pages/AIGenerator";
import Templates from "./pages/Templates";
import MyDesigns from "./pages/MyDesigns";
import About from "./pages/About";




function ProtectedRoute({ children }) {

  return (

    <>

      <SignedIn>
        {children}
      </SignedIn>


      <SignedOut>
        <Navigate to="/login" replace />
      </SignedOut>

    </>

  );

}




function App() {


return (

<Routes>


{/* Public Routes */}

<Route
path="/"
element={<Home />}
/>


<Route
path="/login/*"
element={<Login />}
/>

<Route
 path="/templates"
 element={<Templates />}
/>

<Route
path="/register/*"
element={<Register />}
/>


<Route
path="/terms"
element={<Terms />}
/>


<Route
path="/about"
element={<About />}
/>


{/* Protected Dashboard */}

<Route

path="/dashboard"

element={

<ProtectedRoute>

<Dashboard />

</ProtectedRoute>

}

/>





{/* Protected AI Generator */}

<Route

path="/ai-generator"

element={

<ProtectedRoute>

<AIGenerator />

</ProtectedRoute>

}

/>

  <Route
        path="/my-designs"
        element={
          <ProtectedRoute>
            <MyDesigns />
          </ProtectedRoute>
        }
      />



{/* Default Route */}

<Route

path="*"

element={<Navigate to="/" replace />}

/>



</Routes>

);

}


export default App;