import React from "react";
import Image from "../../atom/Image";
import faqimg from "../../../images/amico.png";
import FaqCard from "./FaqCard";
import FaqList from "./FaqList";
import Text from "../../atom/Text";

const Faq = () => {
  const faq = FaqList.map((list) => {
    return <FaqCard key={list.id} list={list} />;
  });
  return (
    <>
      <div className="flex flex-col lg:flex-row pad bgpurple items-center gap-6 lg:gap-0" >
        <div className="w-full pt-6 md:text-center lg:text-left lg:pt-20" data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out">
          <p className="text-car leadfaq">Frequently Asked Questions</p>
          <Text
            className="text-lg lg:text-2xl font-extralight py-2 text-white"
            children="Confused about anything? Some questions are answered below"
          />
        </div>
        <div className="w-full lg:w-9/12 py-8 lg:py-12">
          <Image src={faqimg} className="w-full" />
        </div>
      </div>
      <div className="pad my-20">{faq}</div>
    </>
  );
};

export default Faq;
