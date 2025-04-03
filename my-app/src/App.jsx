import React from 'react'
import Profile from './Profile'

function imageC() {
  return (
    <div>imageC
      <section>
        <h1>Вызов картины</h1>
        <Profile url={"https://www.worldsbestcatlitter.com/wp-content/uploads/2017/05/1-hello.jpg"} size={100} visble={true}/>
        <Profile url={"https://www.worldsbestcatlitter.com/wp-content/uploads/2017/05/1-hello.jpg"} size={200} visble={false}/>
        <Profile url={"https://www.worldsbestcatlitter.com/wp-content/uploads/2017/05/1-hello.jpg"} size={400} visble={true}/>
      </section>
    </div>
  )
}

export default imageC

