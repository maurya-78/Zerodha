import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_Page/Home/Home_Page";
import Login from "./landing_Page/Login/Login";
import Signup from "./landing_Page/Sign up/Signup";
import AboutPage from "./landing_Page/About/About_Page";
import ProductsPage from "./landing_Page/Products/ProductsPage";
import PricingPage from "./landing_Page/Pricing/Pricing_Page";
import SupportPage from "./landing_Page/Supports/SupportPage";

import NotFound from "./landing_Page/NotFound";
import Navbar from "./landing_Page/Navbar";
import Footer from "./landing_Page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

