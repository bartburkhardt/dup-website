import React, { useState } from "react";

import "./index.scss";

// Icons
import { ReactComponent as IconChevron } from "../../../../assets/icons/chevron-right.svg";

import { sendFormTeamsJSON } from "../../../../util/variables";

import { useTranslation } from 'react-i18next';

export default function ContactFormInputs({ ideaSelected }) {
  // add translation component
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = React.useState(false);

  const handleSubmit = (e) => {
    const formValues = [
      {
        name: "Name",
        value: name
      }, {
        name: "Email address",
        value: email
      }, {
        name: "Message",
        value: message
      }, {
        name: "Request a meeting",
        value: checked ? "Yes, please" : "No, thanks"
      }
    ];
    sendFormTeamsJSON.sections[0].facts = formValues;

    fetch(process.env.REACT_APP_TEAMS_FORM_WEBHOOK, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendFormTeamsJSON),
      mode: 'no-cors',
    }).then(res => {
      console.log("Request complete! response:", res);
      setName("");
      setEmail("");
      setMessage("");
    }).catch(err => {
      console.error(err.message);
    })

    e.preventDefault();
  }

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="contact-form-idea">
      <form onSubmit={handleSubmit}>
        <label>
          {t("form.name.label")}
          <input
            type="text"
            value={name}
            placeholder={t("form.name.placeholder")}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label>
          {t("form.email.label")}
          <input
            type="email"
            value={email}
            placeholder={t("form.email.placeholder")}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          {t("form.message.label")}
          <textarea
            type="text"
            value={message}
            placeholder={t("form.message.placeholder")}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </label>

        <div className="checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
          <label>
            {t("form.requestmeeting")}
          </label>
        </div>

        <button value="Submit">
          {t("form.send")}
          <IconChevron />
        </button>
      </form>
    </div>
  )
}
