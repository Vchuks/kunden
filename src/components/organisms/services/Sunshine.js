import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import sunpic from "../../../images/unnamed 1.png";
import TextLinks from "../../atom/TextLinks";

const Sunshine = () => {
  return (
    <div className="bg-white pad">
      <Text
        className="solution sun text-xl lg:text-3xl mt-8 w-max lg:ml-auto"
        children="Sunshine Digital Center"
      />
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="w-full pt-8 lg:pt-0">
          <Image className="" src={sunpic} />
        </div>
        <div className="w-full lg:ps-8">
          <Text
            className="text-lg text-justify leading-8 py-8 lg:pt-0"
            children="The Sunshine Digital Center is an initiative of Kunden Services Limited in conjunction with the Ondo State Government. The Center is a vibrant community committed to innovation and sustainable development. Our story began in 2019 with our flagship Environmental services founded by Dr. Mrs. Abiola Bashorun.Today, we have diversified into ecofriendly production of nylon and paper products. We also have a state of the art printing press, fully equipped digital centre for photography and cinematography. Our health and fitness centre offers the best in class treatment to clients. Kunden Needles is our garment and apparel centre providing the latest in fashion."
          />
          <TextLinks to="/book-hall" className="txtpurple text-lg font-medium" children="BOOK OUR HALL FOR YOUR EVENTS >" />
        </div>
      </div>
    </div>
  );
};

export default Sunshine;
