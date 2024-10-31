import React from "react";

import { useTranslation } from "react-i18next";

import SubHeader from "../../components/SubHeader";
import Goal from "../../components/Goal";
import Points from "../../components/Points";
import SellingPoints from "../../components/SellingPoints";
import Products from "../../components/Products";
import Contact from "../../components/Contact";

import "./HomePage.scss";

function Home() {
  const { t } = useTranslation();

  const targetAudience = t("targetAudience", { returnObjects: true });

  return (
    <>
      <SubHeader />
      <Goal />
      <Points title={targetAudience.title} items={targetAudience.items} />
      <Products />
      <SellingPoints />
      <Contact />
    </>
  );
}

export default Home;
