import React from 'react'

 function Profile() {
    return (
        

        <>

        <div></div>
        {/* {visible ? <img onClick={()=>console.log("clicked")}
                src={url}
                alt="Katherine Johnson"

                width={size}
            /> : <img onClick={()=>console.log("clicked")}
            src="https://i.imgur.com/YfeOqp2.jpg"
            alt="Katherine Johnson"

            width={size}
        />} */}
        {visible && <img onClick={()=>console.log("clicked")}
                src={url}
                alt="Katherine Johnson"

                width={size}
            />}

        
    
        </>)
    
}
export default Profile
    
 
  


