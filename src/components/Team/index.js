import React from "react";
import { useTranslation } from "react-i18next";

import { teamMembers } from "../../util/variables";

import "./index.scss";

export default function Team() {
  const { t } = useTranslation();

  return (
    <div className="team">
      <h2>{t("team.title")}</h2>
      <div className="team-members">
        {teamMembers.map((member, m) => {
          return (
            <div className="team-members-item" key={m}>
              <div
                className="team-members-item-image"
                style={{
                  backgroundImage: `url(${require("../../assets/images/team/" +
                    member.name.split(" ")[0].toLowerCase() +
                    ".jpg")})`,
                }}
              ></div>
              <div className="team-members-item-info">
                <h4>{member.name}</h4>
                <span>{member.role}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
