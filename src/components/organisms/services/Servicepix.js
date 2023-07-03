import React from "react";
import Image from "../../atom/Image";
import pic1 from "../../../images/Rectangle 1 (2).png";
import pic2 from "../../../images/Rectangle 2.png";
import pic3 from "../../../images/Rectangle 3.png";
import pic4 from "../../../images/Rectangle 4 (2).png";

const Servicepix = () => {
  return (
    <div className="flex gap-4 justify-between py-4 lg:py-8">
      <div className="w-96">
        <Image src={pic1} className="" />
      </div>
      <div className="w-96">
        <Image src={pic2} className="" />
      </div>
      <div className="w-48">
        <Image src={pic3} className="" />
      </div>
      <div className="w-48">
        <Image src={pic4} className="" />
      </div>
    </div>
  );
};

export default Servicepix;
