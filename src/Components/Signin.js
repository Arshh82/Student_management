import React from 'react'
import '../App'
import Signinlog from './Signinlog'

// let siginp = new URL ("/public/images/logbackground/stuu.jpg",import.meta.url)
const Signin = () => {
  return (
    <>
    <div id='mainn'>
      
      <div className='formmsignin'>      
      {/* <img  src={siginp} alt='no img' className='siginpp' /> */}
      
      
      <Signinlog/>
      
      </div>
      

    </div>
    
    </>
  )
}

export default Signin