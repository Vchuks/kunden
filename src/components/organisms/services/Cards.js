import React from "react";
import Image from "../../atom/Image";
import Text from "../../atom/Text";
import pic1 from "../../../images/Group 44.png";
import pic2 from "../../../images/Group 43.png";
import pic3 from "../../../images/Group 41.png";

const Cards = () => {
  return (
    <div className="pad">
      <div className="py-14 lg:py-28 flex flex-col lg:flex-row gap-14">
        <div
          className="card-one"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <div className="">
            <Image src={pic1} className="w-full" />
          </div>
          <Text
            className="card-head txtpurple2 pt-8"
            children="Infotech & Cards"
          />
          <Text
            className="md:w-3/4 m-auto font-light card-text txtdark text-lg md:text-xl text-center"
            children="Prepaid Card & infotech management scheme"
          />
        </div>
        <div
          className="card-two"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <div>
            <Image src={pic2} className="w-full" />
          </div>
          <Text className="card-head txtpurple2 pt-8" children="Advisory" />
          <Text
            className="m-auto font-light card-text txtdark text-lg md:text-xl text-center"
            children="Micro loan assistance & advisory services"
          />
        </div>
        <div
          className="card-three"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <div>
            <Image src={pic3} className="w-full" />
          </div>
          <Text className="card-head txtpurple2 pt-8" children="E-Payment" />
          <Text
            className=" m-auto font-light card-text txtdark text-lg md:text-xl text-center"
            children="Electronic payment management & revenue collection"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
