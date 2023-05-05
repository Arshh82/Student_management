import '../../App.css';
import React, { useEffect, useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Loginlogic = () => {
  let [data,updatedata]=useState([]);
  let [product,updateproduct]=useState({name:'',email:'',address:'',password:''});
  useEffect(()=>{
    show();
  });  
  async function show()
  {
    var res=await axios.get("http://tanveerpp.pythonanywhere.com/emps/");
    updatedata(res.data);
  }
  function change(e)
  {
    updateproduct({...product,[e.target.name]:e.target.value});
  }
  return (
    <>
    
      <div className='add' >
      <form onSubmit={(e)=>{
          e.preventDefault();
          async function addData()
          {
            var res=await axios.post('http://tanveerpp.pythonanywhere.com/emps/',product);
            alert("Sucess")
            if(res.status===200)
            {
              alert("product added sucessfully");
            }
          }
          addData();
      }}>
      <div className="col-sm-28 offset-sm-1"  id='formcl'>
      <br/>
         <h2>User Ragistration</h2>
        Name <br/>
        <input type="text" name="name" value={product.name} onChange={change} className='form-control' /><br/>
        
        Email <br/>
        <input type="email" name="email" value={product.email} onChange={change} className='form-control' /><br/>
        Address<br/>
        <input type="text" name="address" value={product.address} onChange={change} className='form-control' /><br/>
        Password<br/>
        <input type="text" name="password" value={product.password} onChange={change} className='form-control' />
        <br/>
        <button className='btn btn-primary' type='submit' id='subbtn'>Sign Up</button>
        <br/><br/><p style={{fontSize:'22px'}}>Already Have Account</p> 
        <Link to='/'>
        <button className='btn btn-danger' type='submit'>Click To Log in</button>
        </Link>
        </div>
      </form>
      </div>
      
    </> 
  )
}
export default Loginlogic