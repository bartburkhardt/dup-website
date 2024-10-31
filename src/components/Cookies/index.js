import React, { useState } from 'react';

import './index.scss';

import { useTranslation } from 'react-i18next';

export default function Cookies() {
    // add translation component
    const { t } = useTranslation();
    const [gdprChosen, setGdprChosen] = useState(localStorage.getItem("gdpr"));

    const disableCookies = (disable) => {
        if (disable) {
            window[`ga-disable-${process.env.REACT_APP_GOOGLE_ID}`] = disable;
            localStorage.setItem("gdpr", "false");
            setGdprChosen(localStorage.getItem("gdpr"));
            console.log(window);
            return;
        }
        window[`ga-disable-${process.env.REACT_APP_GOOGLE_ID}`] = disable;
        localStorage.setItem("gdpr", "true");
        setGdprChosen(localStorage.getItem("gdpr"));
        console.log(window);
    }

    if (!gdprChosen) {
        return (
            <div className='cookies'>
                <p>{t("cookies.text")}
                    <a href="https://www.amsterdam.nl/privacy/cookies-site/">
                        {t("footer.cookies")}
                    </a>
                </p>
                <div className='cookies-buttons'>
                    <button className='btn btn-secondary' onClick={() => disableCookies(true)}>{t("cookies.reject")}</button>
                    <button className='btn btn-primary' onClick={() => disableCookies(false)}>{t("cookies.accept")}</button>
                </div>
            </div>
        )
    }

    return;
}
