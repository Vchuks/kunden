import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import rate from "../../../images/rate.png";
import cardlot from "../../../images/NEW-CARDdark--GIF.gif";

const HeaderService = () => {
  return (
    <>
      <div className="text-center lg:text-start pad text-white bgpurple flex flex-col lg:flex-row gap-4">
        <div
          className="w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <p className="text-service pt-4 lg:pt-8">
            The <span className="solution">Solution</span> to
            <p className="text-service2">Digital Technologies & </p>Electronic
            Payments<span className="dot">.</span>
          </p>
          <Text
            className="lg:text-xl font-extralight"
            children="We specialize in the deployment of dynamic and highly scalable electronic payment and digital solutions that satisfy the evolving needs of the Financial, Industrial, Telecommunication and Utilities sectors of the economy across Sub-Sahara Africa and beyond."
          />
          <div className="w-52 md:w-80 py-10">
            <Image src={rate} />
          </div>
        </div>
        <div className="w-full lg:w-8/12 flex justify-between" 
        >
          <Image src={cardlot} className="w-full"/>
        </div>
      </div>
    </>
  );
};

export default HeaderService;
