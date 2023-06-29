import React from "react";
import Image from "../../atom/Image";
import servleft from "../../../images/servleft.png";
import Text from "../../atom/Text";

const ServicesList = () => {
  return (
    <div className="pad pady grid grid-col-1 lg:grid-cols-2 gap-10 lg:gap-4 items-center">
      <div>
        <Image src={servleft} />
      </div>
      <div className="lg:ps-10">
        <Text className="solution w-max text-xl lg:text-3xl" children="Our Services" />
        <div className="pt-10 ">
          <div className="py-3">
            <div className="flex font-medium gap-8 text-lg lg:text-2xl">
              <Text className="txtpurple" children="01" />
              <Text className="txtpurple2" children="E-Payment Services" />
            </div>
            <div className="flex gap-10 lg:gap-11 pt-2 ps-3">
              <Text className="bgpurple h-auto line" children="" />
              <Text
                className="txtdark lg:text-lg"
                children="We provide electronic payment solutions to organizations, government, companies and industries across Nigeria and beyond."
              />
            </div>
          </div>
          <div className="py-3">
            <div className="flex font-medium gap-8 text-lg lg:text-2xl">
              <Text className="txtpurple" children="02" />
              <Text className="txtpurple2" children="Financial Management Services" />
            </div>
            <div className="flex gap-10 lg:gap-11 pt-2 ps-3">
              <Text className="bgpurple h-auto line" children="" />
              <Text
                className="txtdark lg:text-lg"
                children="We provide strategic consulting services to financial institutions."
              />
            </div>
          </div>
          <div className="py-3">
            <div className="flex font-medium gap-8 text-lg lg:text-2xl">
              <Text className="txtpurple" children="03" />
              <Text className="txtpurple2" children="Payment Card Scheme" />
            </div>
            <div className="flex gap-10 lg:gap-11 pt-2 ps-3">
              <Text className="bgpurple h-auto line" children="" />
              <Text
                className="txtdark lg:text-lg"
                children="We provide Safe, secure and reliable card payment scheme implementation."
              />
            </div>
          </div>
          <div className="py-3">
            <div className="flex font-medium gap-8 text-lg lg:text-2xl">
              <Text className="txtpurple" children="04" />
              <Text className="txtpurple2" children="Value Added Services" />
            </div>
            <div className="flex gap-10 lg:gap-11 pt-2 ps-3">
              <Text className="bgpurple h-auto line" children="" />
              <Text
                className="txtdark lg:text-lg"
                children="E-payment consulting services, payment cards Management, Business Management Service etc."
              />
            </div>
          </div>
          <div className="py-3">
            <div className="flex font-medium gap-8 text-lg lg:text-2xl">
              <Text className="txtpurple" children="05" />
              <Text className="txtpurple2" children="Multimedia Services" />
            </div>
            <div className="flex gap-10 lg:gap-11 pt-2 ps-3">
              <Text className="bgpurple " children="" />
              <Text
                className="txtdark lg:text-lg"
                children="We provide a wide range of multimedia services that spans around photography, digital printing, music studio, cinematography and videography."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
