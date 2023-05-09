import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Coursetabledata = () => {
    let [data, updatedata] = useState([]);
    let [stud, updatestud] = useState({
        name: "",
        fees: "",
        duration: "",
        comments: "",
    });
    useEffect(() => {
      show();
    });
    async function show() {
      var res = await axios.get(
        "https://princestudentapi.onrender.com/Course//"
      );
      updatedata(res.data);
    }
    function change(e) {
      updatestud({ ...stud, [e.target.name]: e.target.value });
    }
  return (
    <>
    <div>
    <table className='table'>
        <thead>
          <tr style={{backgroundColor
        :'white'}}>
            <th>Course Name</th>
            <th>Fess</th>
            <th>Duration</th>
            <th>Comments</th>
            <th></th>
          </tr>
        </thead>
        <tbody  className='tablee' style={{color
        :'white'}}>
          {data.map((v)=>{
            return(<tr key={v.id}>
              <td>{v.name}</td>
              <td>{v.fees}</td>
              <td>{v.duration}</td>
              <td>{v.comments}</td>
              <td><button className='btn-danger' onClick={() =>
              {
                async function del(){
                let res = await axios.delete(`${v.url}`);
                if (res.status === 204){
                  alert('Deleted Successfully')
                }
              }
              del();
              }}>Delete</button></td> 
            </tr>)
          })}
        </tbody>
      </table>
      </div>
      </>
  )
}

export default Coursetabledata