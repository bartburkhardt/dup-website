import React, { useEffect, useState } from "react";

import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

import "./index.scss";

export default function Contact() {
    const [isMobile, setIsMobile] = useState(false);

    const changeDevice = () => {
        setIsMobile(window.innerWidth <= 650 ? true : false);
    }

    useEffect(() => {
        changeDevice();
        window.addEventListener("resize", changeDevice);
    }, []);

    return (
        <div className="contact-section-wrapper">
            <div className="contact-section">
                <ContactForm hideByDefault={isMobile} />
                <ContactText />
            </div>
        </div>
    )
}
