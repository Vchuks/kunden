import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import TextLinks from '../../atom/TextLinks'
import welcome from "../../../images/welcome to kunden.png";

const HeaderService = () => {
  return (
    <>
    <div className="text-center lg:text-start pad flex flex-col-reverse lg:flex-row gap-4 lg:mt-10">
      <div className="w-11/12 flex justify-between">
        <Text
          className="lg:w-96 lg:text-lg font-light"
          children="We specialize in the deployment of dynamic and highly scalable electronic payment and digital solutions that satisfy the evolving needs of the Financial, Industrial, Telecommunication and Utilities sectors of the economy across Sub-Sahara Africa and beyond."
        />
        <div className="hidden lg:block w-1/6 mr-4 ">
          <Image src={welcome} />
        </div>
      </div>
      <div className="w-full">
        <p className="text-service pt-4 lg:pt-0">
          The <span className="solution">Solution</span> to 
          <p className="text-service2">Digital Technologies
          & </p>Electronic Payments<span className="dot">.</span>
        </p>
      </div>
    </div>
    <div className="lg:ml-auto lg:w-1/2 items-center flex flex-col lg:flex-row px-4 py-4 lg:py-0 gap-4 lg:gap-8">
      <TextLinks to="#" children={<button className="w-56 lg:text-lg px-8 py-4 rounded-full bgpurple text-white">Get Started</button>} />
      <TextLinks to="#" children={<button className="lg:text-lg underline font-medium">Contact Us</button>} />
    </div>
    </>
  );
};

export default HeaderService;
