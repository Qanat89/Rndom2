import { useState } from 'react'
import "./App.css"
import Square from './Square'
import Circle from './Circle'
import Triangle from './Triangle'
import Button from './button'


 function App() {

  const [toggle, setToggle] = useState("square");

  function toToggle(){
    if(toggle === "square"){
      setToggle("circle")
    }else if(toggle === "circle"){
      setToggle("triangle")
    }else{
      setToggle("square")
    }
  }

  return (
    
    <section >
      <div onClick={()=>toToggle()}>
      {toggle === "square" && <Square/>}
      {toggle === "circle" && <Circle/>}
      {toggle === "triangle" && <Triangle/>}

      </div>
      
  <Button></Button>
    
    </section>
   
    
  )
}

export default App

import React from 'react'




