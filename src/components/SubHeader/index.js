import React from "react";

import "./SubHeader.scss";

import { useTranslation } from "react-i18next";

export default function SubHeader() {
  // add translation component
  const { t } = useTranslation();

  return (
    <div className="sub-header-container">
      <div className="sub-header-container-text">
        <h1>Digital Urban Planning Lab</h1>
        <p>{t("landingText")}</p>
      </div>
    </div>
  );
}
