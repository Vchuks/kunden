import React from "react";
import multipic from "../../../images/Frame 13.png";
import Image from "../../atom/Image";
import mpic1 from "../../../images/Rectangle 26.png";
import mpic2 from "../../../images/Rectangle 26 (1).png";
import mpic3 from "../../../images/Rectangle 26 (2).png";
import mpic4 from "../../../images/Rectangle 26 (3).png";
import TextLinks from "../../atom/TextLinks";
import Text from "../../atom/Text";

const multiList = [
  {
    id: 1,
    title: "Audio Recording Studio",
    text: "Kunden Services offers comprehensive ePayment solutions and services suite across the whole ePayment chain. We are here to make your epayments simple and secure. Create your Payments, e-Wallet to receive and make cross-border payments. Save money, make instant mass payouts and access your funds anywhere in the world.",
    img: mpic1,
  },
  {
    id: 2,
    title: "Photo Studio",
    text: "Kunden Services offers comprehensive ePayment solutions and services suite across the whole ePayment chain. We are here to make your epayments simple and secure. Create your Payments, e-Wallet to receive and make cross-border payments. Save money, make instant mass payouts and access your funds anywhere in the world.",
    img: mpic2,
  },
  {
    id: 3,
    title: "Cinematography",
    text: "Kunden Services offers comprehensive ePayment solutions and services suite across the whole ePayment chain. We are here to make your epayments simple and secure. Create your Payments, e-Wallet to receive and make cross-border payments. Save money, make instant mass payouts and access your funds anywhere in the world.",
    img: mpic3,
  },
  {
    id: 4,
    title: "Musical Instruments Training",
    text: "Kunden Services offers comprehensive ePayment solutions and services suite across the whole ePayment chain. We are here to make your epayments simple and secure. Create your Payments, e-Wallet to receive and make cross-border payments. Save money, make instant mass payouts and access your funds anywhere in the world.",
    img: mpic4,
  },
];
const HeaderM = () => {
  const mList = multiList.map((each) => {
    if (each.id % 2 !== 0){
    return (
      <div key={each.id}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 my-10 lg:my-20">
          <div className="flex flex-col gap-4 lg:gap-0 justify-between">
            <Text className="solution w-max" children={each.title} />
            <Text
              className="text-justify lg:w-9/12 lg:text-lg"
              children={each.text}
            />
            <TextLinks
              to="/session"
              children={
                <button className="w-56 px-8 py-2 lg:py-4 rounded-full bgpurple text-white">
                  Book a Session
                </button>
              }
            />
          </div>
          <div className="">
            <Image src={each.img} />
          </div>
        </div>
      </div>
    )}else{
        return(
            <div key={each.id}>
        <div className="flex flex-col lg:flex-row-reverse gap-4 lg:gap-0 my-10 lg:my-20">
          <div className="flex flex-col gap-4 lg:gap-0 justify-between lg:items-end">
            <Text className="solution w-max" children={each.title} />
            <Text
              className="text-justify lg:w-9/12 lg:text-lg"
              children={each.text}
            />
            <TextLinks
              to="/session"
              children={
                <button className="w-56 px-8 py-2 lg:py-4 rounded-full bgpurple text-white">
                  Book a Session
                </button>
              }
            />
          </div>
          <div className="">
            <Image src={each.img} />
          </div>
        </div>
      </div>
        )
    }
  });
  return (
    <div>
      <div>
        <Image src={multipic} />
      </div>
      <div className="pad">{mList}</div>
    </div>
  );
};

export default HeaderM;
