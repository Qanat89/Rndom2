import React from 'react'
import { Link, NavLink } from 'react-router'



function NavIcon({children, name, link}) {

  return (
    <NavLink to={link} className=' group flex flex-col justify-center items-center gap-1 cursor-pointer'>{children}
    <p className=' text-xs text-zinc-600 group-hover:text-[#FF6633]'>{name}</p>
    </NavLink>
  )
}

export default NavIcon