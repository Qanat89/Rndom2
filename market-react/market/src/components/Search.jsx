import React from 'react'
import { IoIosSearch } from "react-icons/io";


function Search() {
  return (
    <div className=' relative col-span-6 w-full'>
      <input className=' bg-white border-2 text-sm px-4 py-2 focus:border-[#FF663 rounded-md border-[#70C05B] w-full h-10' placeholder='Найти товар' />
      <IoIosSearch size={26} className=' absolute right-2 top-2'/>
      
        
        </div>
  )
}

export default Search