import React from 'react'
import Text from '../atom/Text'
import Image from '../atom/Image'
import TextLinks from '../atom/TextLinks'
import arrow from '../../images/arrows.png'
import join from '../../images/button.png'
import pic1 from "../../images/alafpic.png"
import pic2 from "../../images/Rectangle 25.png"
import pic3 from "../../images/Ellipse 18.png"
import pic4 from "../../images/Rectangle 24.png"
import music from "../../images/Frame 44.png"
// import play from "../../images/play.png"
import musicicon from "../../images/Ellipse 19.png"
import download from '../../images/solar_download-square-line-duotone.png'
import Radio from '../organisms/services/Radio'

const Alaafia = () => {
    const track = [
        {
            id:"1",
            title:"Alaafia La Wa",
            icon:musicicon
        },
        {
            id:"2",
            title:"Alaafia La Wa",
            icon:musicicon
        },
        {
            id:"3",
            title:"Alaafia La Wa",
            icon:musicicon
        },
        {
            id:"4",
            title:"Alaafia La Wa",
            icon:musicicon
        },
        {
            id:"5",
            title:"Alaafia La Wa",
            icon:musicicon
        },
        {
            id:"6",
            title:"Alaafia La Wa",
            icon:musicicon
        },
    ]
    return (
        <>
        <section className='pad'>
            <div className='flex flex-col lg:flex-row items-start gap-4 lg:gap-0 '>
                <div className='w-full'>
                    <Text className="head-text1 pt-4 lg:pt-0 text-center lg:text-left lg:w-10 txtpurple2 text-3xl lg:text-7xl alaf-head-text" children="THE ALAAFIA FOUNDATION" />
                    <TextLinks to="" className="pt-10" children={<Image className="pt-4 m-auto lg:m-0 lg:pt-10 w-44 lg:w-56" src={join}/>}/>
                </div>
                <div className='w-full text-xl flex flex-col justify-center items-center lg:justify-end lg:items-end head-text2'>
                    <div>

                    <Image className="w-44 lg:w-56 pb-4" src={arrow} />
                    </div>
                    <Text className="alaf-head-text" children="
                     Scholarship Scheme
            "/>
                    <Text className="alaf-head-text" children="
                Vulnerable Empowerment
            "/>
                    <Text className="alaf-head-text" children="
                            Youth Employment
                    "/>
                    <Text className="alaf-head-text" children="
            Alaafia Hidden Treasure
    "/>
                    <Text className="alaf-head-text" children="
        A Mile in her Shoes
        "/>
                    <Text className="alaf-head-text" children="
        Rural Empowerment

        "/>
                    <Text className="alaf-head-text" children="
            The Alaafia Band

            "/>
                </div>
            </div>

            <section className='flex flex-col gap-10 pt-20 lg:py-16 lg:flex-row'>
                <div className=''><Image className="w-full" src={pic1}/></div>
                <div className=''><Image className="w-full" src={pic2}/></div>
                <div className=''><Image className="w-full" src={pic3}/></div>
                <div className=''><Image className="w-full" src={pic4}/></div>
            </section>

            <section className=' py-14 lg:py-56'>
                <Image src={music} className="w-full h-screen object-cover object-center lg:h-auto"/>
                {/* <Image src={play} className=""/> */}
            </section>

            <section className=''>
                <Text className="track alaf-head-text text-3xl lg:text-7xl" children="Download Latest Tracks"/>
                <table className='w-100 border mt-16 mb-16 lg:mb-56'>
                    {track.map(each=>{
                        return( 
                        <tr>
                        <td className='w-16 lg:w-56 py-1 ps-4 lg:ps-14 pe-2 lg:pe-10'><Image src={each.icon} className=""/></td>
                        <td className='w-28 lg:w-96 text-sm lg:text-2xl'>{each.title}</td>
                        <td className='w-24 lg:w-4/12'></td>
                        <td className='w-28 lg:w-80 text-sm lg:text-2xl'>Download Track</td>
                        <td className='w-8 lg:w-28 pe-4 lg:pe-14'><Image src={download} className=""/></td>
                    </tr>
                    )})
}
                </table>
            </section>

        </section>
            <section>
                <div className='alafcolor textem part'>
                    <div className='flex gap-8'>
                    <Text className="textem1 text-white" children="WOMEN"/>
                    <Text className="textfill" children="MUSIC"/>
                    <Text className="textfill" children="ARTISTIC"/>
                    </div>
                    <div className='flex gap-8'>
                    <Text className="textfill2" children="EMPOWERMENT"/>
                    <Text className="textem2 text-white" children="COMMUNITY"/>
                    </div>
                </div>
                <div className='pb-24'>
                    <p className="textf">We are duly interested in developing the hidden treasures in youths. We aim to be world’s foremost foundation to harness the youth power, <span className='alfft'>providing best-in-class solutions</span> that are specifically tailored towards meeting the needs of youth development. We are focused on revolutionizing the lives of youths and women <span className='alfft'>by leveraging Technology, People and Service</span> to broaden the depth and breadth of empowerment. </p>
                </div>
            </section>
            <Radio/>
            </>
    )
}

export default Alaafia
