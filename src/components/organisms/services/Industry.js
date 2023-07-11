import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import box from "../../../images/Group 12.png";

const Industry = () => {
  return (
    <div className="pad bgpurple ind">
      <Text
        className="text-ind pt-14 lg:pt-0"
        children="Industries that we serve."
      />
      
      <div className="lg:w-10/12 flex flex-col lg:flex-row text-justify  text-white gap-4 lg:gap-20 pt-10 pb-20">
        <div className="lg:w-11/12 flex flex-col gap-4 justify-between">
          <div className="py-2">
            <div>
              <div className="flex gap-4 items-center py-3">
                <div className="w-6 lg:w-8">
                  <Image src={box} />
                </div>
                <Text
                  className="text-xl lg:text-2xl font-medium"
                  children="Finance & Banking"
                />
              </div>
              <Text
                className="lg:text-lg font-extralight "
                children="Banking and Finance explores the dynamic, fast-paced world of money, shares, credit and investments. We provide the liquidity in terms of money or assets required for individuals and businesses to invest for the future."
              />
            </div>
          </div>
          <div className="py-2">
            <div>
              <div className="flex gap-4 items-center py-3">
                <div className="w-6 lg:w-8">
                  <Image src={box} />
                </div>
                <Text
                  className="text-xl lg:text-2xl font-medium"
                  children="Information Technology"
                />
              </div>
              <Text
                className="lg:text-lg font-extralight "
                children="Information technology is an essential partner in management of your business, regardless of the kind of enterprise you operate. We are skilled with the necessities of information technology."
              />
            </div>
          </div>
          <div className="py-2">
            <div>
              <div className="flex gap-4 items-center py-3">
                <div className="w-6 lg:w-8">
                  <Image src={box} />
                </div>
                <Text
                  className="text-xl lg:text-2xl font-medium"
                  children="Manufacturing"
                />
              </div>
              <Text
                className="lg:text-lg font-extralight "
                children="We have a united set of operations team that begin with product design, planning, selecting materials or commodities, manufacturing methods, guaranteeing quality control, and implementing corporate administration and sales."
              />
            </div>
          </div>
        </div>
        <div className="lg:w-10/12 flex flex-col gap-4 ">
          <div className="py-2">
            <div>
              <div className="flex gap-4 items-center py-3">
                <div className=" w-6 lg:w-8">
                  <Image src={box} />
                </div>
                <Text
                  className="text-xl lg:text-2xl font-medium"
                  children="Tele-Communication"
                />
              </div>
              <Text
                className="lg:text-lg font-extralight "
                children="Telecommunications is an important tool for businesses. We are able to communicate effectively with customers and deliver high standards of customer service."
              />
            </div>
          </div>
          
          <div className="py-2">
            <div>
              <div className="flex gap-4 items-center py-3">
                <div className="w-6 lg:w-8">
                  <Image src={box} />
                </div>
                <Text
                  className="text-xl lg:text-2xl font-medium"
                  children="Training & Consults"
                />
              </div>
              <Text
                className="lg:text-lg font-extralight "
                children="We optimize training and consultation by assessing an organization's existing training resources and developing a program that addresses skills gaps and business goals."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
