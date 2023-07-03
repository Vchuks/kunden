import React from 'react'
import Image from '../../atom/Image'
import radpic from '../../../images/Rectangle 13.png'
import play from '../../../images/play.png'
import Text from '../../atom/Text'

const Radio = () => {
  return (
    <div className='pad'>
    <div className='flex bgpurple rounded-2xl p-3 radio my-10'>
      <div className='w-72 lg:w-2/4 hidden lg:block'><Image src={radpic} className=""/></div>
      <div className='w-full p-4 text-white'>
        <Text className="text-lg lg:text-2xl lg:pt-10" children="Join and Enjoy our Online Radio"/>
        <Text className="font-extralight lg:text-xl pt-2" children="Kunden Online Radio"/>
        <div>
        <div className='flex items-center gap-2 font-extralight pt-10 lg:pt-20'>
        <Text className="text-lg" children="0:00"/>
        <Text className="w-full h-1 rounded-md bg-white" children=""/>
        <Text className="text-lg" children="0:00:00"/>
        </div>
        <Image src={play} className="w-16 lg:w-24 m-auto pt-4"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Radio
