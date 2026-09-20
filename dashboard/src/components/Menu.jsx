import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("loggedInUser") || "null");

  const userName = user?.fullName || "USERID";
  const email = user?.email || "";

  const getInitials = (name) => {
    const words = name.trim().split(" ");

    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }

    return name.substring(0, 2).toUpperCase();
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Orders",
      path: "/orders",
    },
    {
      name: "Holdings",
      path: "/holdings",
    },
    {
      name: "Positions",
      path: "/positions",
    },
    {
      name: "Funds",
      path: "/funds",
    },
    {
      name: "Apps",
      path: "/apps",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    window.location.href = "https://Finora-hc5c.onrender.com";
  };

  return (
    <div className="menu-container">
      <div className="menu-left">
        <Link to="/" className="Finora-logo">
          <img src="/logo.png" alt="Finora" />
        </Link>
      </div>

      <div className="menu-right">
        <nav className="nav-menu">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${
                location.pathname === item.path ? "nav-active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="menu-divider"></div>

        <div className="user-area">
          <div className="user-avatar">{getInitials(userName)}</div>

          <div className="user-details">
            <span className="user-name">{userName}</span>
            <span className="user-email">{email}</span>
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
            title="Logout"
          >
            <span className="logout-arrow">↪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
