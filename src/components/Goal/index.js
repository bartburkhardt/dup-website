import React from "react";
import TitleText from "../TitleText";

import "./index.scss";

import { useTranslation } from 'react-i18next';

export default function Goal() {
    // add translation component
    const { t, i18n } = useTranslation();

    return (
        <div className="goal">
            <TitleText
                useId={i18n.getResource('en', 'translation', 'titleText.goal.redText')}
                redText={t("titleText.goal.redText")}
                titleText={t("titleText.goal.titleText")}
                immediateAnimation={true}
            />
            <h3 className="goal-text">{t("goalText")}</h3>
        </div>
    )
}
