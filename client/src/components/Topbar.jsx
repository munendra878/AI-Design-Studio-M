import { useState } from "react";
import { Menu, Search, Sun, Moon, X } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";
import { useTheme } from "./ThemeContext";

import "./Topbar.css";

export default function Topbar({
  onMenuClick,
  onSearch,
}) {
  const { theme, toggleTheme } = useTheme();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");

    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <header className="topbar">

      {/* Mobile Menu */}
      <button
        className="menu-toggle"
        onClick={onMenuClick}
      >
        <Menu size={24} />
      </button>

      {/* Search */}
      <div className="search-box">
        <Search size={18} />

        <input
          type="text"
          value={searchTerm}
          placeholder="Search designs..."
          onChange={(e) => handleSearch(e.target.value)}
        />

        {searchTerm && (
          <button
            className="clear-search"
            onClick={clearSearch}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Right Side */}
      <div className="topbar-right">

        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === "dark"
            ? <Sun size={20} />
            : <Moon size={20} />
          }
        </button>

        <div className="topbar-user">
          <UserButton afterSignOutUrl="/" />
        </div>

      </div>

    </header>
  );
}