import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";

const params = new URLSearchParams(window.location.search);
const userParam = params.get("user");

if (userParam) {
  try {
    const user = JSON.parse(decodeURIComponent(userParam));
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.history.replaceState({}, document.title, "/");
  } catch (error) {
    console.error("User data error:", error);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
