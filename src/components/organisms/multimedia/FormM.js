import React from "react";
import Text from "../../atom/Text";
import Input from "../../atom/Input";
import TextLinks from "../../atom/TextLinks";

const FormM = () => {
  return (
    <div className=" px-4 lg:w-2/4 m-auto lg:pb-20">
      <div className="lg:w-11/12 m-auto text-center pt-6 lg:pt-16 pb-6">
        <Text className="text-xl lg:text-3xl txtpurple2 font-bold" children="Multimedia Session Form" />
        <Text
          className="txtdark font-light pt-4"
          children="Please fill this form to book a session for any of the services at our multimedia studio."
        />
        <Text className="txtdark font-light" children="Note:(*) are required fields." />
      </div>
      <form className="lg:w-11/12 m-auto">
        <div className="form-inp mb-6">
            <Input type="text" placeholder="Full Name*" className=" outline-purple-950 w-full px-4 py-3 lg:py-4 "/>
        </div>
        <div className="form-inp mb-6">
            <Input type="text" placeholder="Phone Number" className=" outline-purple-950 w-full px-4 py-3 lg:py-4 "/>
        </div>
        <div className="form-inp mb-6">
            <Input type="email" placeholder="Email*" className=" outline-purple-950 w-full px-4 py-3 lg:py-4 "/>
        </div>
        <div className="form-inp mb-6 py-1">
            <select className="rounded-md outline-purple-950 w-full px-4 py-3 lg:py-4 txtdark">
                <option>Multimedia Services needed*</option>
            </select>
        </div>
        <div className="form-inp mb-6 py-1">
            <select className=" rounded-md outline-purple-950 w-full px-4 py-3 lg:py-4 txtdark">
                <option className="">Date(DD/MM/YY)*</option>
            </select>
        </div>
        <div className="form-inp mb-6 py-1">
            <select className=" rounded-md outline-purple-950 w-full px-4 py-3 lg:py-4 txtdark">
                <option className="">Time*</option>
            </select>
        </div>
        <div className="form-inp mb-6">
            <textarea  placeholder="Additional Message" cols="" rows="5" className=" rounded-md outline-purple-950 w-full px-4 py-3 lg:py-4 "></textarea>
        </div>
        <TextLinks
              to="#"
              className="flex justify-center my-10"
              children={
                <button className="w-56 px-8 py-3 lg:py-4 rounded-full bgpurple text-white">
                  Submit
                </button>
              }
            />
      </form>
    </div>
  );
};

export default FormM;
