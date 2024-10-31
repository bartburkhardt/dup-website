import React, { useEffect, useState } from "react";

import TitleText from "../../TitleText";
import ContactForm from "../ContactForm";
import ContactTextIllustration from "./ContactTextIllustration";

import "./index.scss";

import { useTranslation } from 'react-i18next';

export default function ContactText() {
  // add translation component
  const { t, i18n } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);

  const changeDevice = () => {
    setIsMobile(window.innerWidth <= 650 ? true : false);
  }

  useEffect(() => {
    changeDevice();
    window.addEventListener("resize", changeDevice);
  }, []);

  return (
    <div className="contact-text">
      <div className="contact-text-field">
        <TitleText
          useId={i18n.getResource('en', 'translation', 'titleText.contact.redText')}
          redText={t("titleText.contact.redText")}
          titleText={t("titleText.contact.titleText")}
        />
      </div>
      <ContactForm hideByDefault={!isMobile} />
      <ContactTextIllustration />
    </div>
  )
}
