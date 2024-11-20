import React, { useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

export default function Products() {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState(
    t("products", { returnObjects: true })
  );

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

  useEffect(() => {
    setProducts(t("products", { returnObjects: true }));
  }, [i18n.language]);

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
        {new Array(Math.ceil(products.length / 2)).fill().map((prod, p) => {
          const item = p + p;

          return (
            <SwiperSlide key={p}>
              <div
                className="swiper-slide-left"
                style={{
                  backgroundImage: `url(${require(`../../assets/images/${
                    products[item].img ? products[item].img : "art-impression"
                  }.png`)})`,
                }}
              >
                <div className="swiper-slide-left-header">
                  <h1>{products[item].title}</h1>
                </div>
                <div className="swiper-slide-left-content">
                  <span>{products[item].text}</span>
                </div>
              </div>
              {products[item + 1] && (
                <div
                  className="swiper-slide-right"
                  style={{
                    backgroundImage: `url(${require(`../../assets/images/${
                      products[item + 1].img
                        ? products[item + 1].img
                        : "art-impression"
                    }.png`)})`,
                  }}
                >
                  <div className="swiper-slide-right-header">
                    <h1>{products[item + 1].title}</h1>
                  </div>
                  <div className="swiper-slide-right-content">
                    <span>{products[item + 1].text}</span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
