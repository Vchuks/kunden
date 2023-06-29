import React from 'react'
import Servicepix from '../organisms/services/Servicepix'
import HeaderService from '../organisms/services/HeaderService'
import ServicesList from '../organisms/services/ServicesList'
import Multimedia from '../organisms/services/Multimedia'
import Sunshine from '../organisms/services/Sunshine'
import Industry from '../organisms/services/Industry'
import Partners from '../organisms/services/Partners'
import Radio from '../organisms/services/Radio'

const Home = () => {
  return (
    <>
      <Servicepix />
      <HeaderService/>
      <ServicesList/>
      <Multimedia/>
      <Sunshine/>
      <Industry/>
      <Partners/>
      <Radio/>
    </>
  )
}

export default Home
