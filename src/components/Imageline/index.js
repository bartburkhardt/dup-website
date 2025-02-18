import React from "react";

import "./index.scss";

export default function Imageline() {
  const images = [1, 2, 3, 4];
  return (
    <div className="imageline-wrapper">
      <div className="imageline">
        {images.map((image, i) => {
          return (
            <div
              className="imageline-image"
              style={{
                background: `url(${require("../../assets/images/imageline-" + i + ".png")})`,
              }}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
