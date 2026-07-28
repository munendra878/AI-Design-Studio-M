import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

import { useTheme } from "./ThemeContext";

import logoLight from "../assets/logai-light.png";
import logoDark from "../assets/logai-dark.png";

import "./Navbar.css";
import Templates from './../pages/Templates';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img
  src={theme === "dark" ? logoDark : logoLight}
  alt="AI Design Studio Logo"
  className="logo-img"
/>
          <span>✨ AI Design Studio</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

  
      {/* Navigation */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <SignedOut>
          <li className="mobile-auth">
            <Link to="/login" onClick={closeMenu}>
              <button className="login-btn">
                Login
              </button>
            </Link>
          </li>          

          <li className="mobile-auth">
            <Link to="/register" onClick={closeMenu}>
              <button className="register-btn">
                Register
              </button>
            </Link>
          </li>
        </SignedOut>

        <SignedIn>
          <li>
            <Link to="/dashboard" onClick={closeMenu}>
              Dashboard
            </Link>
          </li>
        </SignedIn>
       

        <li>
          <Link to="/home" onClick={closeMenu}>
            Home
          </Link>
        </li>

          <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
      
        <li>
          <Link to="/templates" onClick={closeMenu}>
            Templates
          </Link>
        </li>

        <li>
          <Link to="/terms" onClick={closeMenu}>
            Terms & Conditions
          </Link>
        </li>

      <li className="mobile-auth">
      {/* Theme Toggle */}
      <button
        className="theme-btn"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <Sun size={20} />
        ) : (
          <Moon size={20} />
        )}
      </button>
      </li>

        <SignedIn>
          <li className="mobile-user">
            <UserButton afterSignOutUrl="/" />
          </li>
        </SignedIn>

      </ul>

      {/* Desktop Authentication */}
      <div className="auth desktop-user">

        <SignedOut>
          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="register-btn">
              Register
            </button>
          </Link>
        </SignedOut>

        
      {/* Theme Toggle */}
      <button
        className="theme-btn"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <Sun size={20} />
        ) : (
          <Moon size={20} />
        )}
      </button>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

      </div>

    </nav>
  );
}