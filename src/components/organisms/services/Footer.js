import React from 'react'
import Image from '../../atom/Image'
import Text from '../../atom/Text'
import logo from "../../../images/logo.png"
import inst from '../../../images/ph_instagram-logo-thin.png'
import face from '../../../images/ph_facebook-logo-light.png'
import twit from '../../../images/carbon_logo-twitter.png'
import yout from '../../../images/ph_youtube-logo-light.png'
import TextLinks from '../../atom/TextLinks'

const Footer = () => {
  return (
    <footer className='pad mt-24'>
        <div className='flex flex-col lg:flex-row gap-10 justify-between'>
      <div className='lg:w-1/2'>
        <div className='w-72'>
            <Image src={logo} className=""/>
        </div>
        <Text className="txtdark py-4 font-light" children="Kunden Services Ltd is a leading consulting firm operating in Nigeria, The United Kingdom, and United States of America specializing in financial services in support of business transactions, investment, and development."/>
        <div className='flex gap-4'>
            <TextLinks to="#" children={<div className='w-6'><Image src={inst}/></div>} />
            <TextLinks to="#" children={<div className='w-6'><Image src={face}/></div>} />
            <TextLinks to="#" children={<div className='w-6'><Image src={twit}/></div>} />
            <TextLinks to="#" children={<div className='w-6'><Image src={yout}/></div>} />
        </div>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 justify-between gap-8 lg:gap-0'>
        <div className=''>
            <Text className="txtpurple2 font-medium text-lg" children="Company"/>
            <div className='pt-3 flex flex-col gap-3'>
                <TextLinks to="/services" className="txtdark font-light" children="Our Services"/>
                <TextLinks to="#" className="txtdark font-light" children="Career"/>
                <TextLinks to="#" className="txtdark font-light" children="Alaafia Foundation"/>
                <TextLinks to="#" className="txtdark font-light" children="Multimedia Studio"/>
                <TextLinks to="#" className="txtdark font-light" children="About Us"/>
            </div>
        </div>
        <div className=''>
        <Text className="txtpurple2 font-medium text-lg" children="Resources"/>
            <div className='pt-3 flex flex-col gap-3'>
                <TextLinks to="#" className="txtdark font-light" children="Media"/>
                <TextLinks to="#" className="txtdark font-light" children="FAQs"/>
                <TextLinks to="#" className="txtdark font-light" children="Help Center"/>
                <TextLinks to="#" className="txtdark font-light" children="Got a Suggestion?"/>
            </div>
        </div>
        <div className=''>
        <Text className="txtpurple2 font-medium text-lg" children="Contact"/>
            <div className='pt-3 flex flex-col gap-3'>
                <TextLinks to="mailto:kundenservicesltd2015@gmail.com" className="txtdark font-light" children="kundenservicesltd2015@gmail.com"/>
                <TextLinks to="#" className="txtdark font-light" children="Instagram"/>
            </div>
        </div>
        </div>
        </div>
        <hr className='mt-8 lg:mt-16 mb-8 bg'/>
        <div className='grid grid-flow-row md:grid-cols-2 txtpurple2 pb-4 lg:pb-0'>
            <div className='lg:text-lg'>
                <p><span className='font-medium pe-2 text-lg lg:text-xl'>NGA</span> Quarter 54, Alagbaka GRA Akure, Ondo State, Nigeria</p>
                <p><span className='font-medium pe-2 text-lg lg:text-xl'>USA</span> 1702 Todds Lane Suite 237 Hampton Virginia 23669</p>
            </div>
            <div className='font-bold text-center pt-4 lg:pt-0 lg:text-right'>Copyright 2023- All Rights Reserved</div>
        </div>
    </footer>
  )
}

export default Footer
