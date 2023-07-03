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
    text: `Unbelievably, the newest type of printing is digital printing as we know it today. Modern digital printing processes, which were created in 1991, are even more recent than 3D printing, which was created in 1981. 

    When a single print job requires different pictures or text, digital printing offers excellent versatility. Our digital printing services enable batch processing of over 1000 signs, each with a unique message.  We are still in the game of serving customers who need print-on-demand and quick turnaround in as many quantities as they desire.
    `,
    img: ppic1,
  },
  {
    id: 2,
    title: "Full Paper Bindery",
    text: `It's challenging to think of an effective scenario where we deliver individuals a stack of loose sheets aside from single sheet handouts or postcards. Not only is this potentially messy, it also makes reading challenging. To maintain your pages neatly in the order you intended, we provide the most comprehensive professional binding services in the area utilizing the best technology designed specifically for the job. We supply:

    . Perfect Binding. This is what some people refer to as "paper bound books." More than merely glued-on covers are available from us. The gluing edge is ground by our ideal binder to improve glue adhesion. In addition to creating hinged covers, which help prevent the covers from being yanked off when opened, covers are scored for the spine width. Our method has the capacity to manufacture hundreds of perfect-bound books per hour, up to two inches thick and 12.5 inches wide.
    . Saddle Stitching. Beware of booklet producers that slap pressure rollers and forbidden staples on your documents. To ensure that each sheet fits properly on the saddle, a real saddle stitcher, like ours, first scores each sheet into a v-shape. The booklet is then stitched together using a continuous strand of steel wire, using just enough for a precise fit and leaving no protruding ends to poke your finger. And for that polished, first-rate outcome, books are put through a three-knife trimmer once stitching is finished.
    . Binding and punching. The paper must be punched and then bound for a wide range of document finishing techniques. We carry out each of them: Plastic coil, Velo, GBC, and Wire-O. Up to 1,000,000 sheets can be punctured by our high-speed punch in a single shift. Absolutely, a million. Even though we hardly ever need to accomplish that much in a single shift, our turnaround times are quite quick, so we don't want the punching portion of the operation to slow things down.
    . 3 hole drilling. This is essential for 3-ring binders. In just a few seconds, we can drill through an entire ream of paper with a single pull. Although we can actually drill up to five holes at once, most people only require three.
    . Tabs. You require tabs for your books and binders. You are not constrained to 5th-cut white index stock because we make our own tabs. You can have them cut anyway you like, laminated or not. Even full-color printed pages can be converted into tabs.
    . Die cutting. The majority of printers must outsource die cutting. Not a general copy. We recently made an investment in a high-speed rotary die cutter, which has let us complete some incredibly unique projects. Consider using pocket folders that are custom-shaped to fit your documents. If we can print it, we can probably die cut it—door hangers, personalized packaging, wine boxes, you name it.
    . Folding. For various jobs, many types of folders are required. We have more than one because of this. Folding sheets of text weight stock is a wonderful fit for certain of our folders. However, it's crucial to score the sheets before folding when folding cover stock. We have a device that accomplishes just that for that reason. There is no cracking at the folds!`,
    img: ppic2,
  },
  {
    id: 3,
    title: "Wide Format Printing",
    text: `We spend a lot of time working with conference and event organizers at the Sunshine Digital Centre. From "save-the-date" postcards to conference binders and handouts, we print it all. We'll meet your tight deadlines because we work so quickly (without losing even the slightest amount of output or final quality).

    Large prints are essential to conferences and events, which is why we also provide posters, banners, and signage. Up to 42 inches wide by practically any length, our wide format printing department can print on a number of materials. The highest quality text and image reproduction is guaranteed by our 11-color printer.
    
    For hanging banners, we can print on vinyl and add grommets. Your images can sparkle on special gloss stock. Additionally, constant stock for signs keeps costs in check. We can mount posters and signs on gator board or foam core. Additionally, we can handle direct printing onto solid materials like plastic, aluminum, or wood.
    
    
    
    `,
    img: ppic3,
  },
  
];
const HeaderP = () => {
  const pList = printList.map((each) => {
    if (each.id % 2 !== 0){
    return (
      <div key={each.id}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 my-10 lg:my-20">
          <div className="w-full flex flex-col gap-4 lg:gap-0 justify-between">
            <Text className="solution w-max text-xl lg:text-2xl " children={each.title} />
            <pre
              className="text-justify pt-4 font-light pe-8 lg:text-lg">
              {each.text}
            </pre>
            
          </div>
          <div className="lg:w-8/12">
            <Image src={each.img}  />
          </div>
        </div>
      </div>
    )}else{
        return(
            <div key={each.id}>
        <div className="flex flex-col lg:flex-row-reverse gap-4 lg:gap-0 my-10 lg:my-20">
          <div className="w-full flex flex-col gap-4 lg:gap-0 justify-between lg:items-end">
            <Text className="solution w-max text-xl lg:text-2xl" children={each.title} />
            <pre
              className="text-justify pt-4 font-light ps-8 lg:text-lg">
              {each.text}
            </pre>
            
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
        <Image src={printpic} />
      </div>
      <div className="pad">{pList}</div>
    </div>
  );
};

export default HeaderP;

