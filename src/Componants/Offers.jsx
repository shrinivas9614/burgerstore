import React from 'react'
import { burgerquote1, burimg1 } from '../assets'

const Offers = () => {
  return (
    <div className="relative grid xl:grid-cols-2 sm:grid-cols-2 md:grid-cols-1">
      
      
      <div className="px-14 py-14">
        <img src={burimg1} alt="" className="xl:h-[full] sm:h-[full] w-full rounded-xl" />
      </div>
      <div className="relative flex flex-col gap-10 py-10 mt-5 mr-10 " >
        <img src={burgerquote1} alt="" className="h-[12rem] object-cover rounded-xl" />
        <img src={burgerquote1} alt="" className="h-[12rem] object-cover rounded-xl" />

      </div>
    </div>
  )
}

export default Offers
