import React from 'react'

function Profile({size, url, visble}){
  
    
    return (<>
    {visble && <img  width={size} src={url} alt="cat" /> }





    
    </>)
}

export default Profile

// const random = Math.random()* 100;
// "https://www.worldsbestcatlitter.com/wp-content/uploads/2017/05/1-hello.jpg"