import React from "react";
import "./Navigation.scss";

import { useTranslation } from "react-i18next";

import icon from "../../assets/images/Icon.svg";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  // add translation component
  const { t, i18n } = useTranslation();

  const changeText = () => {
    i18n.changeLanguage(i18n.language === "nl" ? "en" : "nl");
    localStorage.setItem("lang", i18n.language);
  };

  return (
    <div className="navigation">
      {/* <Link
        className="button"
        to={`concepts`}
        style={
          useLocation().pathname === "/concepts"
            ? { textDecoration: "underline" }
            : { textDecoration: "none" }
        }
      >
        <img src={icon} alt="..." />
        <p>{t("concepts")}</p>
      </Link> */}
      <button className="button" onClick={changeText}>
        <img src={icon} alt="..." />
        <p>{t("lang")}</p>
      </button>
    </div>
  );
}
