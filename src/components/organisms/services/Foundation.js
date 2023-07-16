import React from 'react'
import Image from '../../atom/Image'
import img1 from '../../../images/Group 45.png'
import img2 from '../../../images/Group 40.png'
import Text from '../../atom/Text'
import TextLinks from '../../atom/TextLinks'
import  zlg from '../../../images/PHOTO-2023-05-19-14-21-00 (2) 1.png'
import alaf from '../../../images/Group 46.png'

const Foundation = () => {
  return (
    <div className='pad'>
      <div className='w-11/12 m-auto md:w-full flex flex-col-reverse lg:flex-row items-center found-one px-4 py-10 lg:p-16 gap-10 lg:gap-0 mt-14 lg:mt-28' 
      data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out">
        <div className='w-full'>
            <div className='hidden lg:block w-20'><Image src={img1} className=""/></div>
            <Text className="found-text txtpurple2 py-10" children="Need help with Environmental Management?"/>
            <TextLinks to="#" children={<button className='w-full md:w-72 font-medium txtpurple text-lg md:text-xl p-4 rounded-full bg-white'>Visit ZL Global Alliance</button>}/>
        </div>
        <div className='w-full'><Image src={zlg} className="w-4/5 lg:w-2/3 m-auto lg:mr-0 lg:ml-auto"/></div>
      </div>
      <div className='w-11/12 m-auto md:w-full flex flex-col-reverse lg:flex-row items-center found-two bgpurple px-4 py-10 lg:p-16 mt-10 lg:mt-16 gap-10 lg:gap-0 mb-10' data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out">
        <div className='w-full'>
            <div className='hidden lg:block w-20'><Image src={img2} className=""/></div>
            <Text className="md:w-96 found-text text-white pt-10" children="The Alaafia Foundation"/>
            <Text className="text-white font-extralight md:text-2xl pb-10" children="This is a subsidiary of the Kunden Company to assist and empower youths to showcase their hidden treasures. "/>
            <TextLinks to="#" children={<button className='w-full md:w-72 font-medium txtpurple text-lg md:text-xl p-4 rounded-full bg-white'>Visit Alaafia Foundation</button>}/>
        </div>
        <div className='lg:w-2/3'><Image src={alaf} className="w-full m-auto lg:mr-0 lg:ml-auto"/></div>
      </div>
      
    </div>
  )
}

export default Foundation
