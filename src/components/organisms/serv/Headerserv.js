import React from 'react'
import Text from '../../atom/Text'
import Image from '../../atom/Image'
import serv from '../../../images/Group 33.png'

const Headerserv = () => {
  return (
    <div className='pad grid grid-flow-row lg:grid-cols-2 items-center'>
      <div className=''>
        <Text className="text-service text-center lg:text-start pb-4 lg:pb-0" children="Our Services"/>
      </div>
      <div className='flex items-center'>
        <div className='hidden lg:block w-20'><Image src={serv} className=""/></div>
        <Text className="lg:w-96 text-lg lg:ml-auto lg:text-right" children="We are a full service fintech and digital agency that builds immersive user experiences. Our team creates an exceptional visualization of customer goals and achieve them."/>
      </div>
    </div>
  )
}

export default Headerserv
