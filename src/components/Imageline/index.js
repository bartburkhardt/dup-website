import React, { useEffect, useState } from "react";

import "./index.scss";

export default function Imageline() {
  const images = [1, 2, 3, 4];

  const [isMobile, setIsMobile] = useState(false);

  const changeDevice = () => {
    setIsMobile(window.innerWidth <= 700 ? true : false);
  };

  useEffect(() => {
    changeDevice();
    window.addEventListener("resize", changeDevice);
  }, []);

  return (
    <div className="imageline-wrapper">
      <div className="imageline">
        {images
          .filter((image, i) => {
            if ((isMobile && i === 2) || (isMobile && i === 3)) {
              console.log(i);
              return false;
            }
            return true;
          })
          .map((image, i) => {
            return (
              <div
                className="imageline-image"
                style={{
                  backgroundImage: `url(${require("../../assets/images/imageline-" +
                    i +
                    ".png")})`,
                }}
                key={i}
              />
            );
          })}
      </div>
    </div>
  );
}
