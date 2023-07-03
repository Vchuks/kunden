import React from "react";
import Text from "../../atom/Text";
import TextLinks from "../../atom/TextLinks";
import Image from "../../atom/Image";
import pic from '../../../images/Group 38.png'

const Multimedia = () => {
  return (
    <div className="my-20">
      <Text
        className="mag solution w-max text-xl lg:text-3xl"
        children="Kunden Multimedia House"
      />
      <div className="pad flex flex-col-reverse lg:flex-row  gap-4 lg:gap-0 items-center">
        <div className="w-full">
          <Text
            className="text-service multi-text pb-10 "
            children="We are Passionate about producing the Best of Sounds and Quality Digital Creatives."
          />
          <TextLinks to="#" className="txtpurple text-xl lg:text-2xl font-medium" children="LEARN MORE >" />
        </div>
        <div className="w-full pt-4 lg:pt-0">
            <Image src={pic}/>
        </div>
      </div>
    </div>
  );
};

export default Multimedia;
