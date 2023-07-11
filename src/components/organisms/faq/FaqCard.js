import React from "react";
import { useState } from "react";
import {FaAngleDown} from 'react-icons/fa6'
import {FaAngleUp} from 'react-icons/fa6'

const FaqCard = ({list}) => {
  const [title, setTitle] = useState(false);
  const {question,answer} = list

  const handleState = () => {
    setTitle(!title);
  };

  return (
    <div className="faq-box">
      {!title && (
        <div
          className="flex w-full justify-between items-center"
          onClick={handleState}
        >
          <p className="txtpurple2 md:text-2xl font-medium ">
            {question}
          </p>
          <div className="txtpurple2 md:text-2xl">

          <FaAngleUp />
          </div>
        </div>
      )}
      {title && (
        <div
          className="flex w-full justify-between items-center"
          onClick={handleState}
        >
          <p className="txtpurple2 md:text-2xl font-medium">
            {question}
          </p>
          <div className="txtpurple2 md:text-2xl">
          <FaAngleDown/>
          </div>
        </div>
      )}
      {title && (
        
          <p className="w-11/12 text-justify txtdark font-light faqtxt py-6">
           {answer}
          </p>
        
      )}
    </div>
  );
};

export default FaqCard;
