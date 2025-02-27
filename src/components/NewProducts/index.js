import React from "react";
import { useTranslation } from "react-i18next";

import XRViewer from "../XRViewer";

import "./index.scss";

export default function NewProducts() {
  const { t } = useTranslation();

  const products = t("products", { returnObjects: true });

  return (
    <div className="projectslist-wrapper">
      <h3>{t("productsInfo.title")}</h3>
      <div className="projectslist">
        {products.map((product, p) => {
          return (
            <div className="projectslist-item" key={p}>
              <div className="projectslist-item-image-box">
                <img
                  src={require(`../../assets/images/${
                    product.img ? product.img : "art-impression"
                  }-square.png`)}
                  loading="lazy"
                  alt=""
                />
              </div>
              <h5>{product.title}</h5>
              <p>{product.text}</p>
              <div className="projectslist-item-more">
                {t("productsInfo.readMore")}
              </div>
              <div>
              {product.xrid && <XRViewer id={product.xrid} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
