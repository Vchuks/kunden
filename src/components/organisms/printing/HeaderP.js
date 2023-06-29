import React from "react";
import printpic from "../../../images/Frame 14.png";
import Image from "../../atom/Image";
import ppic1 from "../../../images/Rectangle 26 (4).png";
import ppic2 from "../../../images/Rectangle 26 (5).png";
import ppic3 from "../../../images/Rectangle 26 (6).png";
import Text from "../../atom/Text";

const printList = [
  {
    id: 1,
    title: "Digital Printing",
    text: "Kunden Services offers comprehensive ePayment solutions and services suite across the whole ePayment chain. We are here to make your epayments simple and secure. Create your Payments, e-Wallet to receive and make cross-border payments. Save money, make instant mass payouts and access your funds anywhere in the world.",
    img: ppic1,
  },
  {
    id: 2,
    title: "Full Paper Bindery",
    text: "Kunden Services offers comprehensive ePayment solutions and services suite across the whole ePayment chain. We are here to make your epayments simple and secure. Create your Payments, e-Wallet to receive and make cross-border payments. Save money, make instant mass payouts and access your funds anywhere in the world.",
    img: ppic2,
  },
  {
    id: 3,
    title: "Plate Making & Bulk Printing",
    text: "Kunden Services offers comprehensive ePayment solutions and services suite across the whole ePayment chain. We are here to make your epayments simple and secure. Create your Payments, e-Wallet to receive and make cross-border payments. Save money, make instant mass payouts and access your funds anywhere in the world.",
    img: ppic3,
  },
  
];
const HeaderP = () => {
  const pList = printList.map((each) => {
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
        <Image src={printpic} />
      </div>
      <div className="pad">{pList}</div>
    </div>
  );
};

export default HeaderP;

