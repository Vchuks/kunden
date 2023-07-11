import React from "react";
import picb from "../../../images/Group 48.png";
import Image from "../../atom/Image";
import Text from "../../atom/Text";
import st from "../../../images/arrow.png";

const Journey = () => {
    const tt= `Kunden Services Ltd, the promoter of the Sunshine Digital Center is a leading consulting firm operating in Sub-Saharan Africa, specializing in financial services in support of business transactions, investment, and development among several other verticals including media and digital services. 
            
            We provide electronic payment solutions to organizations, government, companies and industries across Nigeria and beyond. We also provide strategic consulting services to financial institutions. 
            
            We provide safe, secure and reliable card payment scheme implementation. We also provide electronic consulting services such as e-attendance.
            `
  return (
    <div className="flex flex-col lg:flex-row pad gap-4 lg:my-24">
      <div className="w-full">
        <Image src={picb} />
      </div>
      <div className="w-full">
        <div className="flex items-center pb-4">
          <div >
            <Image src={st} className="w-10 lg:w-16" />
          </div>
          <Text
            className="dot journey-text leno"
            children="The Journey So Far"
          />
        </div>
        <div className="">
          <pre className="lg:ps-4 text-justify textdark font-light lg:text-xl">
            {tt}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Journey;
