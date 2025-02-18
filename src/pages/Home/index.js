import React from "react";

import { useTranslation } from "react-i18next";

import SubHeader from "../../components/SubHeader";
import Goal from "../../components/Goal";
import Audience from "../../components/Audience";
import NewProducts from "../../components/NewProducts";
import Contact from "../../components/Contact";
import Team from "../../components/Team";
import Imageline from "../../components/Imageline";

import "./index.scss";

function Home() {
  const { t } = useTranslation();

  const targetAudience = t("targetAudience", { returnObjects: true });
  const points = t("sellingPoints", { returnObjects: true });

  return (
    <>
      <SubHeader />
      <Imageline />
      <Goal />
      <NewProducts />
      <Audience title={points.title} items={points.items} reverse={true} />
      <Audience title={targetAudience.title} items={targetAudience.items} />
      <Contact />
      <Team />
    </>
  );
}

export default Home;
