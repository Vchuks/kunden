import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
// import TextLinks from '../../atom/TextLinks'
import rate from '../../../images/rate.png'

const HeaderService = () => {
  return (
    <>
    <div className="text-center lg:text-start pad text-white bgpurple flex flex-col-reverse lg:flex-row gap-4">
      
      <div className="w-full">
        <p className="text-service pt-4 lg:pt-8">
          The <span className="solution">Solution</span> to 
          <p className="text-service2">Digital Technologies
          & </p>Electronic Payments<span className="dot">.</span>
        </p>
        <Text
          className="lg:text-xl font-extralight"
          children="We specialize in the deployment of dynamic and highly scalable electronic payment and digital solutions that satisfy the evolving needs of the Financial, Industrial, Telecommunication and Utilities sectors of the economy across Sub-Sahara Africa and beyond."
        />
        <div className="w-80 py-10">

        <Image src={rate}/>
        </div>
      </div>
      <div className="w-8/12 flex justify-between">
        
      </div>
    </div>
    
    </>
  );
};

export default HeaderService;
