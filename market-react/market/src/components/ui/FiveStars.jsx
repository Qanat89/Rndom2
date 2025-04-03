import React from 'react'
import { TiStar } from "react-icons/ti";
import { FaStar } from "react-icons/fa6";

function FiveStars() {
  return (
    <div className='flex flex-row gap-2 items-center'>
    <FaStar className=' fill-[#BFBFBF] hover:fill-[#FF6633] cursor-pointer'/>
    <FaStar className=' fill-[#BFBFBF] hover:fill-[#FF6633] cursor-pointer'/>
    <FaStar className=' fill-[#BFBFBF] hover:fill-[#FF6633] cursor-pointer'/>
    <FaStar className=' fill-[#BFBFBF] hover:fill-[#FF6633] cursor-pointer'/>
    <FaStar className=' fill-[#BFBFBF] hover:fill-[#FF6633] cursor-pointer'/>
    
    </div>
  )
}

export default FiveStars
