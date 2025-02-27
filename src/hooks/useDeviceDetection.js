import { useState, useEffect } from "react";

export default function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice =
        /android|iphone|ipad|ipod/i.test(userAgent) || window.innerWidth <= 700;

      setIsMobile(isMobileDevice);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isMobile;
}
