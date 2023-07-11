import React from "react";
import Text from "../atom/Text";
import Input from "../atom/Input";
import TextLinks from "../atom/TextLinks";
import ami from "../../images/amico2.png";
import Image from "../atom/Image";
import inst from "../../images/ph_instagram-logo-thin.png";
import face from "../../images/ph_facebook-logo-light.png";
import twit from "../../images/carbon_logo-twitter.png";
import yout from "../../images/ph_youtube-logo-light.png";

const FormM = () => {
  return (
    <div className="flex flex-col lg:flex-row pad gap-8 md:gap-20 items-baseline mb-28">
      <div className="w-full lg:pb-20">
        <div className="pt-6 lg:pt-16 pb-6">
          <Text
            className="text-xl lg:text-3xl txtpurple2 font-bold"
            children="Get in touch"
          />
          <Text
            className="txtdark font-light pt-4 lg:text-lg"
            children="If there's anything that we can do to help or if you have any questions, please don't hesitate to get in touch. Note:(*) Required fields."
          />
        </div>
        <form className=" py-3">
          <div className="form-inp mb-6">
            <Input
              type="text"
              placeholder="Full Name*"
              className=" outline-purple-950 w-full px-4 py-3 lg:py-5 "
            />
          </div>
          <div className="form-inp mb-6">
            <Input
              type="text"
              placeholder="Phone Number"
              className=" outline-purple-950 w-full px-4 py-3 lg:py-5 "
            />
          </div>
          <div className="form-inp mb-6">
            <Input
              type="email"
              placeholder="Email*"
              className=" outline-purple-950 w-full px-4 py-3 lg:py-5 "
            />
          </div>

          <div className="form-inp mb-6">
            <textarea
              placeholder="Type your message"
              cols=""
              rows="5"
              className=" rounded-md outline-purple-950 w-full px-4 py-3 lg:py-4 "
            ></textarea>
          </div>
          <TextLinks
            to="#"
            className="flex justify-center my-12"
            children={
              <button className="w-56 px-8 py-3 lg:py-4 rounded-full bgpurple text-white text-lg lg:text-xl">
                Submit
              </button>
            }
          />
        </form>
      </div>
      <div className="11/12 ml-auto">
        <div className="lg:text-lg font-light">
          <p className="py-1">
            <span className="font-medium pe-2 lg:text-lg ">NGA</span>{" "}
            Quarter 54, Alagbaka GRA Akure, Ondo State, Nigeria
          </p>
          <p className="py-1">
            <span className="font-medium pe-2 lg:text-lg ">USA</span>{" "}
            1702 Todds Lane Suite 237 Hampton Virginia 23669
          </p>
        </div>
        <div className="flex gap-4 py-4">
          <TextLinks
            to="#"
            children={
              <div className="w-8">
                <Image src={inst} />
              </div>
            }
          />
          <TextLinks
            to="#"
            children={
              <div className="w-8">
                <Image src={face} />
              </div>
            }
          />
          <TextLinks
            to="#"
            children={
              <div className="w-8">
                <Image src={twit} />
              </div>
            }
          />
          <TextLinks
            to="#"
            children={
              <div className="w-8">
                <Image src={yout} />
              </div>
            }
          />
        </div>
        <Image src={ami} className="w-full pt-10" />
      </div>
    </div>
  );
};

export default FormM;
