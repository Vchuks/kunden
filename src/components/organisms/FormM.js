import React, {useEffect, useState} from "react";
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
  
  const [msg, setMsg] = useState()
  const [details, setDetails] = useState({
      fullname: "",
      email: "",
      phone_number: "",
      message:""
  })

  const handleForm =(e)=>{
    setDetails((prevData)=>{
      return {...prevData, [e.target.name]: e.target.value}
      
    })
  }

  
  useEffect(()=>{
    // window.addEventListener("load", function() {
      const action="https://script.google.com/macros/s/AKfycbx-nWPsaBIQpho-o2lP-vgPRuyjxKrEVs8DE05FFBarLMIrkj8BpPeDODFXKwBPaMEVNw/exec"
      const form = document.querySelector('#form-body');
      const but = document.querySelector('.submit-btn');
      
      but.addEventListener("click", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        fetch(action, {
          method: 'POST',
          body: data,
        })
        .then(() => {
          setMsg("Successful!")
        })
      });
    // });
  },[])
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
        <form className=" py-3" id="form-body">
          <div className="form-inp mb-6">
            <Input
              type="text"
              placeholder="Full Name*"
              className=" outline-purple-800 w-full px-4 py-3 lg:py-5 "
              name="fullname"
              value={details.fullname}
              onChange={handleForm}
            />
          </div>
          <div className="form-inp mb-6">
            <Input
              type="text"
              placeholder="Phone Number"
              className=" outline-purple-800 w-full px-4 py-3 lg:py-5 "
              name="phone_number"
              value={details.phone_number}
              onChange={handleForm}
            />
          </div>
          <div className="form-inp mb-6">
            <Input
              type="email"
              placeholder="Email*"
              className=" outline-purple-800 w-full px-4 py-3 lg:py-5 "
              name="email"
              value={details.email}
              onChange={handleForm}
            />
          </div>

          <div className="form-inp mb-6">
            <textarea
              placeholder="Type your message"
              cols=""
              rows="5"
              className=" rounded-md outline-purple-800 w-full px-4 py-3 lg:py-4 "
              name="message"
              value={details.message}
              onChange={handleForm}
            ></textarea>
          </div>
          {msg &&<p className="w-full text-xl lg:text-2xl text-green-700 text-center">{msg}</p>}

          <TextLinks
            to="#"
            className="flex justify-center my-12"
            children={
              <button className="w-56 submit-btn px-8 py-3 lg:py-4 rounded-full bgpurple text-white text-lg lg:text-xl" 
              >
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
            to="https://instagram.com/kundenservicesltd?igshid=MzRlODBiNWFlZA"
            children={
              <div className="w-8">
                <Image src={inst} />
              </div>
            }
          />
          <TextLinks
            to="https://www.facebook.com/ePaymentsnigeria?mibextid=LQQJ4d"
            children={
              <div className="w-8">
                <Image src={face} />
              </div>
            }
          />
          <TextLinks
            to="https://twitter.com/kundenservices?s=21&t=94rEvPMvmhbrkHhbgMl0FA"
            children={
              <div className="w-8">
                <Image src={twit} />
              </div>
            }
          />
          <TextLinks
            to="https://youtube.com/@zlglobalalliance4043"
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
