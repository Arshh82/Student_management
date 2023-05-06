import React from 'react'
import '../../App.css';
import axios from 'axios';
import { useState } from 'react';
import Loginlogic from './Loginlogic';


// let loginp = new URL ("/public/images/logbackground/stu.jpg",import.meta.url)
let Login = () => {
    
  return (
    <>
  
    <div id='mainn'>
      
      <div className='formm'>      
      {/* <img src={loginp} alt='no img' className='loginpp' /> */}
      <div className=''>
      <Loginlogic className='formlog' ></Loginlogic>
      </div>
      
      
      </div>
      

    </div>
    
    </>
  )
}

export default Login;