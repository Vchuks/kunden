import React from 'react'
import pics1 from '../../../images/Frame 6.png'
import pics2 from '../../../images/Frame 13.png'
import pics3 from '../../../images/Frame 14.png'
import pics4 from '../../../images/Frame 15.png'
import Image from '../../atom/Image'
import arrow from '../../../images/fluent-mdl2_down.png'
import TextLinks from '../../atom/TextLinks'

const list = [
    {
        id:1,
        img:pics1,
        link:"/infotech"
    },
    {
        id:2,
        img:pics2,
        link:"/multimedia"

    },
    {
        id:3,
        img:pics3,
        link:"/printing-press"

    },
    {
        id:4,
        img:pics4,
        link:"/online-radio"

    },
    
]
const Picserv = () => {
    const serv = list.map(each=>{
      return  <div className='my-4 relative' key={each.id}>
        <Image src={each.img}/>
        <TextLinks to={each.link} children={<div className='w-8 lg:w-12 absolute arrow  top-1/2 lg:top-52 right-6 lg:right-24 p-2 lg:px-3 lg:py-3 bg-inherit border rounded-full'><Image src={arrow} className=""/></div>} />
        </div>
    })
  return (
    <div className='pb-20'>
      {serv}
    </div>
  )
}

export default Picserv
