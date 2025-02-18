import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "../components/Cookies";

import Home from "../pages/Home";

export default function App() {
  const { i18n } = useTranslation();
  const lang = localStorage.getItem("lang");

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
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
      {/* <Cookies /> */}
    </div>
  );
}
