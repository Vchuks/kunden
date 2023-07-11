import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import pica from "../../../images/ceo.png";
import picb from "../../../images/Frame 4.png";
import picc from "../../../images/Frame 4 (1).png";
import picd from "../../../images/Frame 4 (2).png";
import pice from "../../../images/Frame 4 (3).png";

const Team = () => {
  return (
    <div className="pad ">
      <Text className="leno dot journey-text" children="The Team" />
      <Text className="textdark text-xl lg:text-3xl" children="Leadership" />
      <div className="flex flex-wrap gap-8 lg:gap-6 mb-10 lg:mb-24 justify-between lg:justify-normal pt-14">
        <div className="pic-box">
          <Image src={pica} className="w-full" />
          <Text
            className="txtpurple2 lg:text-2xl font-medium pt-3 lg:pt-6 lg:pb-2"
            children="Dr. Abiola Bashorun, FCIN"
          />
          <Text className="textdark lg:text-2xl" children="CEO/MD" />
        </div>
        <div className="pic-box">
          <Image src={picb} className="w-full" />
          <Text
            className="txtpurple2 lg:text-2xl font-medium pt-3 lg:pt-6 lg:pb-2"
            children="Mr. Oluwatobi Benjamin"
          />
          <Text className="textdark lg:text-2xl" children="Deputy MD" />
        </div>
        <div className="pic-box">
          <Image src={picc} className="w-full" />
          <Text
            className="txtpurple2 lg:text-2xl font-medium pt-3 lg:pt-6 lg:pb-2"
            children="Mr. Olumuyiwa Adebayo"
          />
          <Text className="textdark lg:text-2xl" children="Head of HR" />
        </div>
        <div className="pic-box lg:pt-20">
          <Image src={picd} className="w-full" />
          <Text
            className="txtpurple2 lg:text-2xl font-medium pt-3 lg:pt-6 lg:pb-2"
            children="Ms. Simbiat Aliyu"
          />
          <Text className="textdark lg:text-2xl" children="Head of Research and Documentation" />
        </div>
        <div className="pic-box lg:pt-20">
          <Image src={pice} className="w-full" />
          <Text
            className="txtpurple2 lg:text-2xl font-medium pt-3 lg:pt-6 lg:pb-2"
            children="Mr. Olowe Oluwatobi"
          />
          <Text className="textdark lg:text-2xl" children="Head of IT" />
        </div>
      </div>
    </div>
  );
};

export default Team;
