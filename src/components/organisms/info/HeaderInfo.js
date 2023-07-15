import React from 'react'
import Text from '../../atom/Text'

const HeaderInfo = () => {
    const headList = [
        {
            id:1,
            title:"E-PAYMENT, E-WALLET",
            text:`Kunden Services offers comprehensive ePayment solutions and services suite across the whole ePayment chain. We are here to make your epayments simple and secure.

            Create your Payments, e-Wallet to receive and make cross-border payments. Save money, make instant mass payouts and access your funds anywhere in the world.

            With our e-payment solutions, you can easily make payments on behalf of your organization from the comfort of your home, office or any Internet-enabled location.`
        },
        {
            id:2,
            title:"CREDIT & PAYMENT RISK MANAGEMENT",
            text:`We offer a one-to-one approach to credit and payment risk management that allows you to balance risk effectively while continuing to maximize quality customer acquisition and retention.

            Improved data sources, cutting-edge analytics, and communication tools for effective credit and payment risk assessment and management.`
        },
        {
            id:3,
            title:"INTERNET BANKING & BILL PAYMENT",
            text:`Local and International MasterCard, Visa, Verve as well as other alternatives payment methods, eCommerce, online e-transfer and offline gateways.`
        },
        {
            id:4,
            title:"FRAUD MANAGEMENT",
            text:`Real-time scoring option to detect and block fraudulent online transactions through our newly fraud risk identification service.`
        },
        {
            id:5,
            title:"INTEGRATED OPTIONS",
            text:`We offer various integration methods- Responsive Redirect Payment Page, Mobile Integration for Mobile Apps and Enterprise APIs to suit your needs.`
        },
        {
            id:6,
            title:"TRANSACTION MONITORING",
            text:`Robust merchant portal to view real time transactions from a single/multiple stores and support refund and void functions.`
        },
        {
            id:7,
            title:"SECURITY",
            text:`Our fraud management solutions allow you to leverage proven technologies to create customized strategies that help limit losses while maintaining customer satisfaction.`
        },
        {
            id:8,
            title:"CASHLESS SYSTEM",
            text:`Mobile banking, Internet banking, Electronic Payment. Digital transactions bring in better transparency, scalability and accountability.`
        },
    ]
    const headL = headList.map(each=>{
        return <div key={each.id} className='my-6'>
            <Text className="solution w-fit lg:text-3xl" children={each.title}/>
            <pre className="txtdark text-justify font-light lg:text-xl py-6 lg:py-8">{each.text}</pre>
        </div>
    })
  return (
    <div className='pb-10'>
      <div className='bgpurple h-52 lg:h-72 flex items-end pad'><p className='text-white leno text-3xl lg:text-5xl ' data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out">Our Services</p></div>
      <div className='pad my-8'>
      {headL}
      </div>
    </div>
  )
}

export default HeaderInfo
