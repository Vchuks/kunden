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
    <footer className='pad mt-20'>
        <div className='flex flex-col lg:flex-row gap-10 justify-between'>
      <div className='lg:w-4/6'>
        <div className='w-80'>
            <Image src={logo} className=""/>
        </div>
        <Text className="txtdark py-4 lg:text-lg font-light" children="Kunden Services Ltd is a leading consulting firm operating in Nigeria, The United Kingdom, and United States of America specializing in financial services in support of business transactions, investment, and development."/>
        <div className='flex gap-4'>
            <TextLinks to="https://instagram.com/kundenservicesltd?igshid=MzRlODBiNWFlZA" children={<div className='w-6'><Image src={inst}/></div>} />
            <TextLinks to="https://www.facebook.com/ePaymentsnigeria?mibextid=LQQJ4d" children={<div className='w-6'><Image src={face}/></div>} />
            <TextLinks to="https://twitter.com/kundenservices?s=21&t=94rEvPMvmhbrkHhbgMl0FA" children={<div className='w-6'><Image src={twit}/></div>} />
            <TextLinks to="https://youtube.com/@zlglobalalliance4043" children={<div className='w-6'><Image src={yout}/></div>} />
        </div>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 justify-between gap-8 lg:gap-0'>
        <div className=''>
            <Text className="txtpurple2 font-medium text-lg" children="Company"/>
            <div className='pt-3 flex flex-col gap-3'>
                <TextLinks to="/services" className="txtdark font-light" children="Services"/>
                <TextLinks to="/career" className="txtdark font-light" children="Career"/>
                <TextLinks to="/about" className="txtdark font-light" children="About Us"/>
                <TextLinks to="#" className="txtdark font-light" children="Alaafia Foundation"/>
                <TextLinks to="https://zlglobalalliance.com" className="txtdark font-light" children="ZL Global Alliance"/>
            </div>
        </div>
        <div className=''>
        <Text className="txtpurple2 font-medium text-lg" children="Resources"/>
            <div className='pt-3 flex flex-col gap-3'>
                <TextLinks to="/faq" className="txtdark font-light" children="FAQs"/>
                {/* <TextLinks to="#" className="txtdark font-light" children="Blog"/> */}
                <TextLinks to="/contact" className="txtdark font-light" children="Got a Suggestion?"/>
            </div>
        </div>
        <div className=''>
        <Text className="txtpurple2 font-medium text-lg" children="Contact"/>
            <div className='pt-3 flex flex-col gap-3'>
                <TextLinks to="mailto:kundenservicesltd2015@gmail.com" className="txtdark font-light" children="kundenservicesltd2015@gmail.com"/>
                <TextLinks to="https://instagram.com/kundenservicesltd?igshid=MzRlODBiNWFlZA" className="txtdark font-light" children="Instagram"/>
            </div>
        </div>
        </div>
        </div>
        <hr className='mt-8 lg:mt-20 mb-8 bg'/>
        <div className='grid grid-flow-row md:grid-cols-2 txtpurple2 pb-4 lg:pb-0'>
            <div className='lg:text-lg font-light'>
                <p><span className='font-medium pe-2 text-lg lg:text-xl'>NGA</span> Quarter 54, Alagbaka GRA Akure, Ondo State, Nigeria</p>
                <p><span className='font-medium pe-2 text-lg lg:text-xl'>USA</span> 1702 Todds Lane Suite 237 Hampton Virginia 23669</p>
            </div>
            <div className='font-medium text-center pt-4 lg:pt-0 lg:text-right'>Copyright 2023- All Rights Reserved</div>
        </div>
    </footer>
  )
}

export default Footer
