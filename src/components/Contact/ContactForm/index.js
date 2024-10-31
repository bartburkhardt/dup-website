import React from "react";

// import ContactFormHeader from "./ContactFormHeader";
import ContactFormInputs from "./ContactFormInputs";

import "./index.scss";

export default function ContactForm({ hideByDefault }) {
  // const [contactIdea, setContactForm] = useState(true);

  // const changeContactForm = (bool) => {
  //   setContactForm(bool);
  // }

  if (hideByDefault) {
    return;
  }

  return (
    <div className="contact-form">
      {/* <ContactFormHeader
        contactIdea={contactIdea}
        changeContactForm={changeContactForm}
      /> */}
      <div className="contact-form-content">
        <ContactFormInputs
          ideaSelected={true}
        />
        <div className="contact-form-content-shape" />
      </div>
    </div>
  )
}
