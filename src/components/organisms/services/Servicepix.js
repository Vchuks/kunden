import React from "react";
import Image from "../../atom/Image";
import pic1 from "../../../images/Rectangle 1.png";
import pic2 from "../../../images/Rectangle 2.png";
import pic3 from "../../../images/Rectangle 3.png";
import pic4 from "../../../images/Rectangle 4.png";

const Servicepix = () => {
  return (
    <div className="flex gap-4 justify-between py-4 lg:py-8">
      <div className="lg:w-80">
        <Image src={pic1} className="w-full" />
      </div>
      <div className="lg:w-96">
        <Image src={pic2} className="w-full" />
      </div>
      <div className="lg:w-48">
        <Image src={pic3} className="w-full" />
      </div>
      <div className="lg:w-32">
        <Image src={pic4} className="w-full" />
      </div>
    </div>
  );
};

export default Servicepix;
