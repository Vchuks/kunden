import React from 'react'
import Text from '../../atom/Text'
import Image from '../../atom/Image'
import pic1 from '../../../images/image 1.png'
import pic2 from '../../../images/image 2.png'
import pic3 from '../../../images/image 3.png'
import pic4 from '../../../images/image 4.png'
import pic5 from '../../../images/image 5.png'
import pic6 from '../../../images/image 6.png'
import pic7 from '../../../images/image 7.png'
import pic8 from '../../../images/ZLGA LOGO 1.png'

const Partners = () => {
  return (
    <div className='pad bg-white'>
      <Text className="solution global w-max m-auto text-xl lg:text-3xl lg:pt-20" children="Our Global Partners"/>
      <div className='pt-14 lg:pb-14 flex gap-x-12 lg:gap-x-20 gap-y-10 flex-shrink-0 flex-grow-0 flex-wrap items-center justify-center'>
        <div className='w-16 lg:w-22'><Image src={pic1} className="w-full"/> </div>
        <div className='w-16 lg:w-22'><Image src={pic2} className="w-full"/> </div>
        <div className='w-16 lg:w-22'><Image src={pic3} className="w-full"/> </div>
        <div className='w-16 lg:w-22'><Image src={pic4} className="w-full"/> </div>
        <div className='w-16 lg:w-22'><Image src={pic5} className="w-full"/> </div>
        <div className='w-16 lg:w-22'><Image src={pic6} className="w-full"/> </div>
        <div className='w-16 lg:w-22'><Image src={pic7} className="w-full"/> </div>
        <div className='w-16 lg:w-22'><Image src={pic8} className="w-full"/> </div>
      </div>
    </div>
  )
}

export default Partners
