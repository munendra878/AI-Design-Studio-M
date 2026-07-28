import {
  LayoutDashboard,
  Home,
  Sparkles,
  Image,
  FileImage,
  User,
  Menu,
  X,
  HardDrive,
} from "lucide-react";

import { NavLink, Link } from "react-router-dom";
import {
  SignOutButton,
  useUser,
} from "@clerk/clerk-react";

import logo from "../assets/logai.png";

import "./Sidebar.css";

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  {
    name: "Home",
    path: "/home",
    icon: <Home size={18} />,
  },
  {
    divider: true,
  },
  {
    name: "AI Generator",
    path: "/ai-generator",
    icon: <Sparkles size={18} />,
  },
  {
    name: "My Designs",
    path: "/my-designs",
    icon: <Image size={18} />,
  },
  {
    name: "Templates",
    path: "/templates",
    icon: <FileImage size={18} />,
  },
];

export default function Sidebar({
  open,
  onClose,
  onMenuClick,
}) {
  const { user } = useUser();

  const initials =
    user?.firstName?.charAt(0)?.toUpperCase() || "U";

  return (
    <>
      {/* Mobile Toggle */}

      <button
        className="sidebar-toggle"
        onClick={onMenuClick}
        aria-label="Open Sidebar"
        aria-expanded={open}
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}

      {open && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`sidebar ${open ? "open" : ""}`}
      >
        {/* Close Button */}

        <button
          className="sidebar-close"
          onClick={onClose}
          aria-label="Close Sidebar"
        >
          <X size={22} />
        </button>
        {/* Logo */}

<div className="logo">
  <Link
    to="/dashboard"
    onClick={onClose}
    className="logo-link"
  >
    <img
      src={logo}
      alt="AI Design Studio"
      className="sidebar-logo"
    />

    <span>AI Design Studio</span>
  </Link>

  <Link
    to="/dashboard"
    onClick={onClose}
    className="logo-link"
  ></Link>

  <button
    className="sidebar-close"
    onClick={onClose}
    aria-label="Close Sidebar"
  >
    <X size={22} />
  </button>
</div>
        {/* Workspace */}

        <div className="workspace">
          <div>
            <b>My Workspace</b>
            <small>Personal</small>
          </div>

          <Sparkles size={18} />
        </div>

        {/* Navigation */}

        <ul className="sidebar-menu">
          {menus.map((item, index) =>
            item.divider ? (
              <div
                key={index}
                className="sidebar-divider"
              />
            ) : (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive
                      ? "menu-link active"
                      : "menu-link"
                  }
                >
                  {item.icon}

                  <span>{item.name}</span>
                </NavLink>
              </li>
            )
          )}
        </ul>


        {/* Profile */}

        <div className="profile">
          <div className="avatar">
            {initials}
          </div>

          <div className="profile-info">
            <b>
              {user?.fullName || "User"}
            </b>

            <small>
              {user?.primaryEmailAddress?.emailAddress}
            </small>
          </div>
        </div>

        {/* Logout */}

        <SignOutButton>
          <button className="logout-btn">
            <User size={18} />

            <span>Logout</span>
          </button>
        </SignOutButton>
      </aside>
    </>
  );
}