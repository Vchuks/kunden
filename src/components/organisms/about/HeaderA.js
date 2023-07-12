import React from 'react'
import Text from '../../atom/Text'
import pica from '../../../images/Group 47.png'
import Image from '../../atom/Image'

const HeaderA = () => {
  return (
    <div className='flex flex-col lg:flex-row pad items-end gap-10 my-6'>
      <div className='w-full' data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out">
        <Text className="solution w-fit text-2xl" children="Our Mission"/>
        <p className='about pt-14 '>To Improve <p className='about'><span className='dot leno'>Digitalization</span> across</p> different Sectors & Industries<span className='dot'>.</span></p>
      </div>
      <div className='w-full' data-aos="flip-down"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out">
        <Image src={pica} className="w-full"/>
      </div>
    </div>
  )
}

export default HeaderA
