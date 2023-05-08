import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Testapii = () => {
    let [user,setUser]=useState({
        name:"",
        email:"",
        contact:"",
        password:""
    });

    
    function change(e)
  {
    setUser({...user,[e.target.name]:e.target.value});
  }
  return (
    <>testapii
    <div>
    <form onSubmit={(e) => {
            e.preventDefault();
            async function addData() {
              var res = await axios.post(
                "https://princestudentapi.onrender.com/Registration//",
                user
              );
              if (res.status === 201) {
                alert(" added sucessfully");
              }
            }
            addData();
          }}
        >
        <input type='text' name="name" value={user.name} onChange={change} /><br/>
        <input type='email' name="email" value={user.email} onChange={change} placeholder='email' /><br/>
        <input type='number' name="contact"  value={user.contact} onChange={change} placeholder='contact' /><br/>
        <input type='text' name="password"  value={user.password} onChange={change} placeholder='password' /><br/>
        <button type='submit'>Submit</button>
    </form>
    </div>
    </>
  )
}

export default Testapii