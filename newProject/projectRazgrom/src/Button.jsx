import React, { useState } from 'react'
import './Button.css'

function Button() {
  const[buttonTitle, setButtonTitle]=
  useState("давайте в 21 30");
  const cLick = ()=>{
    setButtonTitle(prevTitle=>(prevTitle ===  "давайте в 21 30"?"ГОЛОВА":"НЕ ВАРИТ") )
  }
return(
  <button onClick={cLick}>{buttonTitle}</button>
)
}

export default Button