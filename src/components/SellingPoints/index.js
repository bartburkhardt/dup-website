import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import "./index.scss";

export default function SellingPoints() {
  const { t } = useTranslation();

  const items = t("sellingPoints", { returnObjects: true });

  const animateSellingPoints = () => {
    const sellingPointsEl =
      document.getElementsByClassName("selling-point-item");
    for (let i = 0; i < sellingPointsEl.length; i++) {
      const el = sellingPointsEl[i];
      if (window.scrollY > el.offsetTop - 600) {
        el.classList.add("animation-x-axis");
      } else {
        el.classList.remove("animation-x-axis");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateSellingPoints);
  }, []);

  return (
    <div className="selling-points">
      {items.map((point, p) => {
        return (
          <div className="selling-point-item" key={p}>
            <div className="selling-point-item-header">
              <h2>{point.title}</h2>
            </div>
            <div className="selling-point-item-content">
              <span>{point.text}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
