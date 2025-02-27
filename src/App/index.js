import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { Route, Routes, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "../components/Cookies";

import Home from "../pages/Home";
import XR from "../pages/XR";

export default function App() {
  const { i18n } = useTranslation();
  const lang = localStorage.getItem("lang");
  
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith("/xr");

  const setLanguage = () => {
    if (!lang) {
      if (navigator.language !== "nl-NL") {
        i18n.changeLanguage("en");
      }
      return;
    }
    if (i18n.language === lang || lang !== "en") {
      return;
    }
    i18n.changeLanguage("en");
  };

  useEffect(() => {
    // Set language
    setLanguage();

    // Set title of tab
    document.title = "Digital Urban Planning";
  }, []);

  return (
    <div id="App">
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/xr/:id" element={<XR />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
      {/* <Cookies /> */}
    </div>
  );
}
