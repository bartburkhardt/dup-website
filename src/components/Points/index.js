import React from "react";

import DOMPurify from "dompurify";

import "./index.scss";

export default function Points({ title, items }) {
  return (
    <div className="points">
      <h2>{title}</h2>
      <div className="points-items">
        {items.map((item, i) => {
          return (
            <div className="point-item" key={i}>
              <span
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
