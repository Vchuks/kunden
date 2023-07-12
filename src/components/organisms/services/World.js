import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import wrld from "../../../images/Vector.png";


const World = () => {
  return (
    <div className="">
      <div className="pad">
        <p className="world-text" data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out">
          We invest in the <span>World's Strategic Sectors</span>
        </p>
        <Text
          className="lg:w-3/4 font-light txtdark text-lg lg:text-2xl"
          children="We invest in Africa's strategic sectors that provide strong, long-term returns and have the ability to move world's economy forward."
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        />
      </div>
      <div className="py-10 lg:py-32" data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out">
        <Image src={wrld} className="w-full" />
      </div>
    </div>
  );
};

export default World;
