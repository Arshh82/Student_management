import '../App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';


//let Siginp = new URL ("/public/images/logbackground/stuu.jpg",import.meta.url)

const Signinlog = () => {
    let navigate=useNavigate();
  let [data,updatedata]=useState([]);
  let [user,updateuser]=useState({email:'',password:''});
  
  function change(e)
  {
    updateuser({...user,[e.target.name]:e.target.value});
  }
  return (
    <>
    
      <div className='addd' >
      <form onSubmit={()=>
    {
        if(user.email==='admin@gmail.com'&&user.password==="12345")
        {
            alert('Login Success')

            navigate('/dashboard')
          
        }
        else{
          alert('Invalid user id and password')
        }
    }} >

      <div className="col-sm-3 " id='testtd' >
      <br/>
      <center>
      <i class="gg-user"></i>
      
         <h2>User Log in </h2></center>
        <br/>
        <label htmlFor='user_name'>User Name</label> <br/>
        <input type="email" name="email" value={user.email} onChange={change} className='form-control' /><br/>
        <label htmlFor='user_name'>Password</label> <br/>
        <input type="password" name="password" value={user.password} onChange={change} className='form-control' />
        <br/>
        <center>
        <button className='btn btn-primary' type='submit' id='subbtn'>Log in</button>
        </center>
        <br/><br/><br/>
        {/* <p style={{fontSize:'22px'}}>New User CLick </p>  */}
        <Link to='/signin'>
        <button className='btn text-light' type='submit'>New User ? Click Here  To Ragister</button>
        </Link>
        </div>
      </form>
      </div>
      

    
</>
  )
}

export default Signinlog