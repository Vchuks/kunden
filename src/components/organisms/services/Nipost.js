import React from "react";
import Text from "../../atom/Text";
import TextLinks from "../../atom/TextLinks";
import { FaChevronRight } from "react-icons/fa6";
import Image from "../../atom/Image";
import picN from "../../../images/Frame 26.png";
import picN2 from "../../../images/Rectangle 19.png";

const Nipost = () => {
  return (
    <div className="pad">
      <div className="">
        <p
          className="world-text w-full"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
        >
          Build a successful career around our{" "}
          <span>Unending Microfinance Schemes</span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-20 gap-10 lg:gap-0">
        <div className="w-full"  data-aos="zoom-in-down"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out">
          <Text
            className="lg:w-3/4 font-medium txtpurple2 text-lg lg:text-3xl"
            children="NIPOST"
          />
          <Text
            className="lg:w-3/4 py-6 font-extralight txtdark text-lg lg:text-2xl"
            children="We are affiliated to the evolving mechanism of NIPOST for ensuring that income is in excess of expenditure and, therefore, avoiding unnecessary indebtedness to contractors and agents."
          />
          <div className="flex gap-2 items-center">
            <TextLinks
              to="https://www.nipost.gov.ng"
              className="text-lg md:text-2xl txtpurple"
              children="Learn More"
            />
            <FaChevronRight className="text-sm lg:text-lg txtpurple" />
          </div>
        </div>
        <div className="w-full"  data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out">
          <Image src={picN} className="w-full" />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center mt-10 lg:mt-0 mb-20 lg:mb-48 gap-10 lg:gap-0">
        <div className="w-full"  data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out">
          <Image src={picN2} className="w-full" />
        </div>
        <div className="w-full ">
          <div className=""  data-aos="zoom-in-down"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out">
            <Text
              className="lg:w-3/4 m-auto font-medium txtpurple2 text-lg lg:text-3xl"
              children="Financial Empowerment Schemes"
            />
            <Text
              className="lg:w-3/4 m-auto py-6 font-extralight txtdark text-lg lg:text-2xl"
              children="We are in the business of empowering youths to achieve their dreams by assisting with loans and financial benefits. We did it in Kaduna State!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nipost;
