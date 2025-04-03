import React from 'react'
import DropdownMenu from './ui/DropdownMenu'
import Search from './Search'
import NavIcon from './ui/navIcon'
import { IoMdHeartEmpty } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import SignButton from './SignButton';
import DropdownUser from './DropdownUser';
import { useState } from 'react';

function Navbar() {

const[signed, setSigned] = useState(true)



  return (
    <nav className=' w-full px-32 grid grid-cols-12 bg-white py-4'>
<div className=' col-span-7 w-full grid grid-cols-11 gap-6'>
<img src="assets\\logo.png" className='col-span-3'/>


<div className=' flex flex-row gap-4 col-span-8 justify-center items-center'>
    <DropdownMenu/>
    <Search/>
</div>
</div>
<div className=' col-span-5 grid grid-cols-6 px-4'>
    <NavIcon children={<IoMdHeartEmpty size={24}/>} name={"Избранное"}/>
    <NavIcon children={<BsBoxSeam size={20}/>} name={"Заказы"} />
    <NavIcon children={<GiShoppingCart size={24}/>} name={"Корзина"}/>
{signed ? <DropdownUser /> : <SignButton/>}
</div>

    </nav>
  )
}

export default Navbar