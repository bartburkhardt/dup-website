import React from "react";

import "./index.scss";

// Icons
import { ReactComponent as IconRadioActive } from "../../../assets/icons/radio-active.svg";
import { ReactComponent as IconRadioInactive } from "../../../assets/icons/radio-inactive.svg";

export default function ContactFormHeader({ contactIdea, changeContactForm }) {
  let ideaRadio;
  let moreRadio;

  if (contactIdea) {
    ideaRadio = <IconRadioActive />
    moreRadio = <IconRadioInactive />
  } else {
    ideaRadio = <IconRadioInactive />
    moreRadio = <IconRadioActive />
  }

  return (
    <div className="contact-form-header">
      <div
        onClick={() => changeContactForm(true)}
        className={`contact-form-header-button ${contactIdea ? `contact-form-header-button-border-part-left` : `contact-form-header-button-border`}`}
      >
        {ideaRadio}
        <span className="contact-form-header-button-left-text">I have an idea</span>
      </div>
      <div
        onClick={() => changeContactForm(false)}
        className={`contact-form-header-button ${!contactIdea ? `contact-form-header-button-border-part-right` : `contact-form-header-button-border`}`}
      >
        {moreRadio}
        <span className="contact-form-header-button-right-text">I want to know more</span>
      </div>
    </div>
  )
}