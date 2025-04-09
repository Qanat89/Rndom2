import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import FiveStars from '../ui/FiveStars';
import Butoon from '../ui/Butoon';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import { LuShoppingCart } from 'react-icons/lu'



function ProductCard({price, title, priceOriginal, img, discount, id, count}){
  let{catalogId} = useParams()
  return (
    <div className=' min-h-[349px] w-[272px] bg-white hover:shadow-md transition duration-150 delay-50 flex flex-col gap-1 p-4 rounded-b-md'>
       <div className=' relative'>
        {count && <div className=' flex flex-row items-center gap-2 absolute left-1 top-1'> 
          <LuShoppingCart size={26}/>
              <p className='font-semibold'>{count}</p>
                  </div> }
         
       <img src={img}/>

       <IoMdHeartEmpty className=' hover:fill-[#FF6633] cursor-pointer absolute right-1 top-1' size={25}/>
       {discount && <div className=' absolute flex flex-row items-center justify-center px-3 py-1.5 left-1 bottom-1 text-white bg-[#FF6633] w-fit rounded-b-sm '>
        <p>-{discount}%</p>
        </div>} 
        </div>





       <div className=' flex flex-col justify-between items-start h-max gap-4'>

        <div className=' flex flex-row justify-between items-center w-full'>
            <div className=' text-start'>
        <p className=' font-bold text-lg'>{price.toFixed(2)} тг.</p>
        <p className=' text-xs font font-light text-zinc-600'>С картой</p>
       </div>
       <div className=' text-end'>
          <p className=' text-base font-light'>{priceOriginal?.toFixed(2)} тг.</p>

          <p className=' text-xs font-light text-zinc-600 '>Обычная</p>
          </div>
        </div>
       
       <div className=' gap-y-2 flex flex-col'>
        <Link to={`/catalogs/${catalogId}/${id}`} className=' hover:text-[#FF6633]'><p className=' text-start line-clamp-2'>{title}</p></Link>
        <FiveStars/>
        <Butoon width={"lg"} title="Купить" className=" hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-white bg-transparent border-2 border-green-400 text-green-400"/>
       
       </div>

       </div>
     



       </div>
)
}

export default ProductCard
