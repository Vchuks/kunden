import React from 'react'
import Text from '../atom/Text'
import Radio from '../organisms/services/Radio'
import Image from '../atom/Image'
import onR from '../../images/Frame 15.png'

const OnlineRadio = () => {
  return (
    <>
    <div><Image src={onR}/></div>
      <div className='pad mb-20'>
        <Text className="text-justify txtdark lg:text-lg pt-6 lg:pt-14 pb-8" children="Kunden Services offers comprehensive ePayment solutions and services suite across the whole ePayment chain. We are here to make your epayments simple and secure. Create your Payments, e-Wallet to receive and make cross-border payments. Save money, make instant mass payouts and access your funds anywhere in the world. With our e-payment solutions, you can easily make payments on behalf of your organization from the comfort of your home, office or any Internet-enabled location. Kunden Services offers comprehensive ePayment solutions and services suite across the whole ePayment chain. We are here to make your epayments simple and secure. Create your Payments, e-Wallet to receive and make cross-border payments. Save money, make instant mass payouts and access your funds anywhere in the world. With our e-payment solutions, you can easily make payments on behalf of your organization from the comfort of your home, office or any Internet-enabled location."/>
      </div>
        <Radio/>
    </>
  )
}

export default OnlineRadio
