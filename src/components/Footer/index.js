import React from "react";
import "./Footer.scss";

import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-container">
        <a href="https://www.amsterdam.nl/overdezesite/">{t("footer.over")}</a>
        <a href="https://www.amsterdam.nl/privacy/">{t("footer.privacy")}</a>
        <a href="https://www.amsterdam.nl/privacy/cookies-site/">
          {t("footer.cookies")}
        </a>
      </div>
    </div>
  );
}

export default Footer;
