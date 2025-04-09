import React from 'react'
import { IoCheckbox } from 'react-icons/io5'

function BacketCard({}) {
  return (
    <div className=' grid grid-cols-12 w-full items-center bg-white rounded-lg transition delay-75 duration-200 hover:shadow-lg'>
        <div className=' relative aspect-square rounded-md'>
              <img src="/assets/image.png" className=' object-contain h-full w-full ' />
              <IoCheckbox size={26} fill='#70C05B' className=' absolute top-0 left-0'/>
        </div>
          <div className=' flex flex-col gap-2 justify-center items-start col-span-7 px-2'>
             <p>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ</p>
               <div className=' flex flex-row justify-start items-center'>
                     <div className=' flex flex-col gap-1 items-start justify-center'>
                        <div className=' flex flex-row gap-2 items-center justify-start text-sm'>
                            <p className=' font-bold'>33.3 ₸</p>
                            <p> 44.44 ₸</p>
                            <span>за шт</span>
                        </div>
                    </div>
                           <div className=' w-fit h-fit px-2 py-1 bg-[#FF6633] text-white rounded-md'>
                            -10%
                           </div>
               </div>

          </div>
                   <div className=' col-span-2'>

                   </div>
                   <div className=' col-span-2'>

                   </div>
        
        
        
        
        
        
        
    </div>
  )
}

export default BacketCard