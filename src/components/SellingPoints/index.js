import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import "./index.scss";
import DOMPurify from "dompurify";

export default function SellingPoints() {
  const { t } = useTranslation();

  const items = t("sellingPoints.items", { returnObjects: true });

  const animateSellingPoints = () => {
    const sellingPointsEl =
      document.getElementsByClassName("selling-point-item");
    for (let i = 0; i < sellingPointsEl.length; i++) {
      const el = sellingPointsEl[i];

      const elItemsOffset =
        getComputedStyle(el.children[0]).marginTop.split("px")[0] * 2;
      if (!el.style.height) {
        el.style.height = `${el.offsetHeight - elItemsOffset}px`;
      }

      if (window.scrollY > el.offsetTop - 700) {
        if (!el.classList.value.includes("animation-y-axis")) {
          el.classList.add("animation-y-axis");
        }
      } else {
        el.classList.remove("animation-y-axis");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateSellingPoints);
  }, []);

  return (
    <div className="selling-points">
      <h2
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(t("sellingPoints.title")),
        }}
      ></h2>
      {items.map((point, p) => {
        return (
          <div className="selling-point-item" key={p}>
            <div className="selling-point-item-header">
              <h3>{point.title}</h3>
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
