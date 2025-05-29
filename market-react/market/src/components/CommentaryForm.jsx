import React from 'react'
import FiveStars from './ui/FiveStars'
import Button from './ui/Button'
import Textarea from './ui/Textarea'





function CommentaryForm() {

  return (
    <div className=' flex flex-col justify-center items-start text-[#414141]'>
        <div className=' flex flex-row justify-start items-center gap-4 p-2'>
            <p className=' font-extrabold'>Ваша оценка</p>
            <FiveStars/>
       </div>
       <Textarea/>
       <Button title={`Отправить отзыв`} className={` w-fit bg-[#FCD5BA] text-[#FF6633] mt-6 hover:text-[#FCD5BA] hover:bg-[#FF6633]`}/>
    
   </div>
  )
}

export default CommentaryForm