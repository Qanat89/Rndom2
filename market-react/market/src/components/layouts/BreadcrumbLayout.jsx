import React from 'react'
import Breadcrumb from '../ui/BreadCrumb'
import { Outlet, useParams } from 'react-router'


function BreadcrumbLayout() {
    const links = [{


        title:"Главная",
        link:"/"
      }, {
        title:"Каталог",
        link:"/catalogs"
      }]

const params = useParams()

  return (
    <div onClick={()=>console.log(params)} className={'  pt-8' + `${params.productId ? " bg-[#F3F2F1]" : " "}`}><Breadcrumb links={links}/>
    
    <Outlet/>
    </div>
  )
}

export default BreadcrumbLayout