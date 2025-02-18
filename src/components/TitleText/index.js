import React, { useEffect } from "react";

import "./index.scss";

export default function TitleText({
  useId,
  redText,
  titleText,
  immediateAnimation = false,
}) {
  const text = useId.replace(" ", "-");

  const animateText = () => {
    // text & title container
    const redTextContainer = document.getElementById(text);
    const titleTextContainer = document.getElementById(`${text}-title`);

    // animate text & title
    if (
      window.scrollY > redTextContainer.offsetTop - 700 ||
      immediateAnimation
    ) {
      redTextContainer.classList.add("animation-y-axis");
      setTimeout(() => {
        titleTextContainer.classList.add("animation-y-axis");
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateText);
  }, []);

  useEffect(() => {
    animateText();
  }, []);

  return (
    <div className="title-container">
      <div id={text} className="red-text-container">
        <h3 className="red-text">{redText}</h3>
      </div>
      <div id={`${text}-title`} className="title-text-container">
        <h1 className="title-text">
          {titleText}
          <span className="dot">.</span>
        </h1>
      </div>
    </div>
  );
}
