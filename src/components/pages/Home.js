import React from "react";
// import Servicepix from '../organisms/services/Servicepix'
import HeaderService from "../organisms/services/HeaderService";
// import ServicesList from '../organisms/services/ServicesList'
// import Multimedia from '../organisms/services/Multimedia'
// import Sunshine from '../organisms/services/Sunshine'
// import Radio from '../organisms/services/Radio'
import Industry from "../organisms/services/Industry";
import Partners from "../organisms/services/Partners";
import Cards from "../organisms/services/Cards";
import World from "../organisms/services/World";
import Foundation from "../organisms/services/Foundation";

const Home = () => {
  return (
    <>
      {/* <Servicepix /> */}
      <HeaderService />
      <Cards />
      <World />
      {/* <ServicesList/> */}
      {/* <Multimedia/> */}
      {/* <Sunshine/> */}
      <Industry />
      <Foundation />
      <Partners />
      {/* <Radio/> */}
    </>
  );
};

export default Home;
