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
    text: "Our audio recording studio is a dedicated space for sound recording, audio production, and mixing of spoken words, musical performances on instruments or with vocals. We are as modest as an in-home project studio that can accommodate one singer-guitarist and as huge as a structure that can accommodate an orchestra of 30 or more musicians. We have an acoustician or audio engineer that ideally designs both the recording and monitoring (listening and mixing) spaces specifically to achieve the best acoustic properties (acoustic isolation, diffusion, or absorption of reflected sound echoes that might otherwise interfere with the sound heard by the listener).",
    img: mpic1,
  },
  {
    id: 2,
    title: "Photo Studio",
    text: "Professionals and their families can turn to our Photo Studio to help them capture and beautifully showcase the key occasions in their lives. We'll develop a connection with them in which we make the calls to update their photographs. We also offer complimentary digital copies of images via email or CD for a little cost.  When a significant event, like a wedding, arises because of our relationship with the families, there is nowhere else they would go.",
    img: mpic2,
  },
  {
    id: 3,
    title: "Cinematography",
    text: "Our goal in our cinematography studio is to provide outstanding content that engages and resonates with the audiences of our clients. From idea generation through post-production, every stage of our process is influenced by the core values of customer service and design. We are dedicated to giving each project individualized attention to make sure that our clients' vision is accomplished. With our experience, we work to provide content that is unforgettable, goes above and above, and produces results.    ",
    img: mpic3,
  },
  {
    id: 4,
    title: "Musical Instruments Training",
    text: "Enroll in our music production master class training program and learn how to mix, master, and record tracks. Students who successfully complete the course are able to create music using any of the following DAWs (production software), including FL Studio, Cubase, Reason, Sony Acid, Logic Pro, as well as editing and mastering tools like SoundForge and Izotope Ozone. Additionally, students will learn the fundamentals of setting up a home recording studio, enabling them to build up their own studio for private or public usage.    ",
    img: mpic4,
  },
];
const HeaderM = () => {
  const mList = multiList.map((each) => {
    if (each.id % 2 !== 0){
    return (
      <div key={each.id}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 my-10 lg:my-20">
          <div className="w-full flex flex-col gap-4 lg:gap-0 justify-between">
            <Text className="solution w-fit text-xl lg:text-3xl" children={each.title} />
            <Text
              className="text-justify font-light pe-8 lg:text-lg"
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
          <div className="lg:w-8/12">
            <Image src={each.img} />
          </div>
        </div>
      </div>
    )}else{
        return(
            <div key={each.id}>
        <div className="flex flex-col lg:flex-row-reverse gap-4 lg:gap-0 my-10 lg:my-20">
          <div className="w-full flex flex-col gap-4 lg:gap-0 justify-between lg:items-end">
            <Text className="solution w-fit text-xl lg:text-3xl" children={each.title} />
            <Text
              className="text-justify font-light ps-8 lg:text-lg"
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
          <div className="lg:w-8/12">
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
