import React from 'react'


import ProductCard from '../components/cards/ProductCard'
import Filter from '../components/Filter'
import Butoon from '../components/ui/Butoon'




function CatalogPage() {

  
  const links = [{


    title:"Главная",
    link:"/"
  }, {
    title:"Каталог",
    link:"/catalogs"
  }]


  const types =[
    {
      title:"Товары нашего производства",
id: "productOwn",

    },{
      title:"Полезное питание",
      id:"pp"
    },
    {
      title:"Без ГМО",
      id: "notGmo"
    }



  ]

  const products = [
    {
      priceOriginal: 50.55,
      discount:50,
      img:"\\assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"\\assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"\\assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"\\assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"\\assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
    },
    {
      priceOriginal: 50.55,
      
      img:"\\assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
    }
  ]

  return (
    <>
  
    <section className=' px-32 py-8 w-full flex gap-8 flex-col min-h-screen items-start bg-[#FBF8EC]'>
     
      <h2 className='text-5xl font-extrabold text-[#414141]'>
        Молоко, сыр, яйца

      </h2>
<div className=' w-full flex flex-row gap-4 justify-start items-center'>
  {
    types.map((a,n)=>
    (
      <Butoon title={a.title} key={n} className=" w-fit text-sm bg-[#F3F2F1] focus:bf-[#70C05B] hover:text-white focus:text-white"/>
    )
  )   
  }

</div>
      <div className='grid grid-cols-4 w-full gap-10'>
        <Filter/>
        <div  className='flex flex-col gap-6 w-full col-span-3'>
         <div>

         </div>
         <div className='grid grid-cols-3 w-full gap-6'>
         {
                    products.map((x, key)=>(<ProductCard key={key} id={x.id} price={x.price} priceOriginal={x.priceOriginal} discount={x.discount} title={x.title} img={x.img}/>))
        }
         </div>
         <div></div>
         <div></div>
        </div>
      </div>


    </section>
   

    </>
  )
}

export default CatalogPage