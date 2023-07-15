import React from "react";
import HeaderService from "../organisms/services/HeaderService";
import Industry from "../organisms/services/Industry";
import Partners from "../organisms/services/Partners";
import Cards from "../organisms/services/Cards";
import World from "../organisms/services/World";
import Foundation from "../organisms/services/Foundation";
import Nipost from "../organisms/services/Nipost";

const Home = () => {
  return (
    <>
      <HeaderService />
      <Cards />
      <World />
      <Nipost/>
      <Industry />
      <Foundation />
      <Partners />
    </>
  );
};

export default Home;
