import React, { useRef, useEffect, useState } from "react";

import "./index.scss";

import Lottie from "lottie-react";

// Images
import contactTextIllustration from "../../../../assets/animations/illustration_06.json";
import { scrollAnimationOnPosition } from "../../../../util/functions";

export default function ContactTextIllustration() {
  const [isMobile, setIsMobile] = useState(false);
  const mobileFunction = useRef(false);
  const contactTextAnimationRef = useRef();

  const changeDevice = () => {
    setIsMobile(window.innerWidth <= 700 ? true : false);
  };

  const scrollAnimation = () => {
    if (mobileFunction.current) {
      scrollAnimationOnPosition(
        window.scrollY,
        contactTextAnimationRef,
        "contact-text-illustration",
        25,
        400,
        100
      );
      return;
    }
    scrollAnimationOnPosition(
      window.scrollY,
      contactTextAnimationRef,
      "contact-section",
      25,
      300,
      0
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);

    changeDevice();
    window.addEventListener("resize", changeDevice);
  }, []);

  useEffect(() => {
    mobileFunction.current = isMobile;
  }, [isMobile]);

  return (
    <>
      {!isMobile ? (
        <Lottie
          className="contact-text-illustration"
          lottieRef={contactTextAnimationRef}
          animationData={contactTextIllustration}
          loop={false}
          autoplay={false}
        />
      ) : (
        <></>
      )}
    </>
  );
}
