import React, { useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";

import _ from "lodash";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

export default function Products() {
  const { t } = useTranslation();
  const products = t("products", { returnObjects: true });

  const swiperRef = useRef();

  const toggleScroll = () => {
    const headerHeight =
      document.getElementsByClassName("header")[0].offsetHeight;
    const swiperBoxEl = document.getElementsByClassName("products")[0];
    const swiperEl = document.getElementsByClassName("products-swiper")[0];

    if (
      Math.round(window.scrollY) > swiperBoxEl.offsetTop - headerHeight &&
      Math.round(window.scrollY) <
        swiperBoxEl.offsetTop +
          swiperBoxEl.offsetHeight -
          headerHeight -
          swiperEl.offsetHeight
    ) {
      swiperRef.current.swiper.mousewheel.enable();
    } else {
      swiperRef.current.swiper.mousewheel.disable();
    }

    if (Math.round(window.scrollY) < swiperBoxEl.offsetTop - headerHeight) {
      swiperRef.current.swiper.slideTo(0);
    }

    if (
      Math.round(window.scrollY) >
      swiperBoxEl.offsetTop +
        swiperBoxEl.offsetHeight -
        headerHeight -
        swiperEl.offsetHeight
    ) {
      swiperRef.current.swiper.slideTo(products.length - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
  }, []);

  return (
    <div className="products">
      <Swiper
        modules={[Autoplay, Pagination, Mousewheel]}
        direction={"vertical"}
        pagination={{
          type: "progressbar",
        }}
        speed={1000}
        mousewheel={{
          enabled: false,
          releaseOnEdges: true,
        }}
        className="swiper products-swiper"
        ref={swiperRef}
      >
        {products.map((prod, p) => {
          return (
            <SwiperSlide
              key={p}
              style={{
                backgroundImage: `url(${require(`../../assets/images/${
                  prod.img ? prod.img : "art-impression"
                }.png`)})`,
              }}
            >
              <div className="swiper-slide-header">
                <h1>{prod.title}</h1>
              </div>
              <div className="swiper-slide-content">
                <span>{prod.text}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
