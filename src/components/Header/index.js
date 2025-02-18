import React, { useState, useEffect } from "react";

import "./index.scss";

import Navigation from "../Navigation";

// Images
import bigLogo from "./Logox4.png";
import mobileLogo from "../../assets/images/logomobile.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [Logo, setLogo] = useState(bigLogo);

  function replaceLogo() {
    if (window.innerWidth <= 650) {
      setLogo(mobileLogo);
    } else {
      setLogo(bigLogo);
    }
  }

  function headerBorder() {
    const header = document.getElementsByClassName("header")[0];
    let subHeader = document.getElementsByClassName("sub-header-container")[0];

    if (!subHeader) {
      subHeader = document.getElementsByClassName("concept-banner")[0];
    }

    if (!subHeader) {
      header.classList.remove("header-border");
      return;
    }

    if (
      window.scrollY >=
      subHeader.offsetTop + subHeader.offsetHeight - header.offsetHeight
    ) {
      header.classList.add("header-border");
    } else {
      header.classList.remove("header-border");
    }
  }

  useEffect(() => {
    replaceLogo();
    window.addEventListener("resize", replaceLogo);
    window.addEventListener("scroll", headerBorder);
  }, []);

  return (
    <div className="header">
      <Link className="header-left" to={`/`}>
        <img src={Logo} alt="..." />
        {/* <img src={mobileLogo} alt="..." /> */}
        <h1>Digital Urban Planning</h1>
      </Link>
      <Navigation />
    </div>
  );
}
