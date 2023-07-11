import React from 'react'
import Image from '../../atom/Image'
import pic from '../../../images/bro.png'
import Text from '../../atom/Text'

const HeaderC = () => {
    const cart =`Kunden Services Ltd is a leading consulting firm operating in Nigeria, The United Kingdom, and United States of America specializing in financial services in support of business transactions, investment, and development.

    Come have your best working experience here!`
  return (
    <>
    <div className='flex flex-col lg:flex-row pad bgpurple items-center gap-6 lg:gap-0'>
      <div className='w-full pt-6 md:text-center lg:text-left lg:pt-20'>
        <p className='text-car'>Working at <span className='solution'>Kunden</span>.</p>
        <pre className="text-white font-extralight md:text-xl pt-2 lg:text-2xl">{cart}</pre>
      </div>
      <div className='w-full lg:w-9/12 '><Image src={pic} className="w-full"/></div>
    </div>
    <div className='pad my-10 lg:my-20'>
        <Text className="solution w-fit text-xl md:text-3xl" children="Open Positions"/>
        <div className='openn md:w-4/5 m-auto mt-20 lg:mb-32'>
            <Text children="There is no active opening at the moment. Check back later." className="md:text-2xl text-center py-7"/>
        </div>
    </div>
    </>
  )
}

export default HeaderC
