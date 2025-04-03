import React from 'react'
import { useParams } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumb from '../components/ui/BreadCrumb'
import FiveStars from '../components/ui/FiveStars'
import Butoon from '../components/ui/Butoon'
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShare2 } from 'react-icons/fi';
import { CiCircleInfo } from "react-icons/ci";







function ProductPage() {
const links =[{
  title:"Главная",
  link:"/"
},
{
  title:"Каталог",
  link:"/catalogs"
},
{
  title:"Молоко, сыр, яйца",
  link:"/catalogs/milk-cheese"
},
{
  title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12» ",
  link:"/products/product1"
}]

  return (
    <><Navbar/>
    <section className=' px-32 py-8 w-full gap-8 flex flex-col min-h-screen items-start bg-[#F3F2F1]'>
      <Breadcrumb links={links}/>
      <h2 className=' text-3xl font-extrabold text-[#414141]'>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</h2>
      <div>
        <p></p>
        <div>
        <a></a>
        </div>
        <Butoon title="Поделиться" width="md" className=" text-sm gap-4 hover:text-green-500 transition delay-100 duration-300" icon={<FiShare2 size={30}/>}/>
        <Butoon title="В избранное" width="md" className=" text-sm gap-4 hover:text-green-500 transition delay-100 duration-300" icon={<IoMdHeartEmpty size={30}/>}/>
      </div>
      <div className='grid grid-cols-2 gap-8 w-full'>
      <div className=' grid grid-cols-8 gap-4 w-full'>
        <div className=' flex flex-col gap-4'>
          <div className=' bg-white rounded-md h-20 w-full'></div>
          <div className=' bg-white rounded-md h-20 w-full'></div>
          <div className=' bg-white rounded-md h-20 w-full'></div>
          <div className=' bg-white rounded-md h-20 w-full'></div>
          <div className=' bg-white rounded-md h-20 w-full'></div>
        </div>


        <div className=' relative col-span-7 bg-white rounded-lg '>
         <div className=' absolute bg-[#FF6633] top-4 right-4 rounded-md py-02 px-2 '>
          <p>333</p>
          </div>
        </div>
       
      </div>
      <div>
        <div className=' flex flex-row justify-between w-fit items-center '>
          <div className=' flex flex-col gap-1 items-start' >
            <p className=' text-[#606060] text-xl pt-4'>1000,20 </p>
            <p className=' text-xs text-[#BFBFBF]'>обычная цена</p>
</div>

<div className=' flex flex-col gap-1 items-start' >
  <p className=' text-[#606060] text-xl pt-4'>1566,20 </p>
  <p className=' text-xs text-[#BFBFBF] flex flex-row items-center justify-end gap-4 '> <span>С картой</span><CiCircleInfo/></p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
    </div>



  </section>
  <Footer/>
    </>
  )
}

export default ProductPage