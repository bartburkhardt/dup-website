import React from "react";

import audienceLogo from "../../assets/images/audience.svg";
import ambitionImg from "../../assets/images/ambition.jpg";

import "./index.scss";

export default function Audience({ title, items, reverse = false }) {
  return (
    <div className={`audience ${reverse && "audience-reverse"}`}>
      <div className="audience-left">
        <h3>{title}</h3>
        <img src={!reverse ? audienceLogo : ambitionImg} alt="" />
      </div>

      <div className="audience-text">
        {items.map((item, i) => {
          return (
            <div className="audience-text-item" key={i}>
              <h4>{item[0]}</h4>
              <p>{item[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
