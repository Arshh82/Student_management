import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

const Allstudentdata = () => {
  let [data,updatedata]=useState([]);
  let [stud,updatestud]=useState({sname:'',semail:'',smobile:'',saddress:'',scollege:'',sdegree:'',total_amount:'',paid_amount:'',due_amount:'',scourse:''});
  useEffect(()=>{
    show();
  })
  async function show(){
    var res=await axios.get("https://princestudentapi.onrender.com/AddStudent//");
    updatedata(res.data);
  }
  function change(e)
  {
    updatestud({...stud,[e.target.name]:e.target.value});
  }

  return (
    <>
    <div>
    <table className='table table-hover '>
        <thead className=" thead-danger">
          <tr>
            <th>Student Name </th>
            <th>Student Email</th>
            <th>Mobile No.</th>
            <th>Address</th>
            <th>College Name</th>
            <th>Degree</th>
            <th>Total Amount</th>
            <th>Paid Amount</th>
            <th>Due Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v)=>{
            return(<tr key={v.id}>
              <td>{v.sname}</td>
              <td>{v.semail}</td>
              <td>{v.smobile}</td>
              <td>{v.saddress}</td>
              <td>{v.scollege}</td>
              <td>{v.sdegree}</td>
              <td>{v.total_amount}</td>
              <td>{v.paid_amount}</td> 
              <td>{v.due_amount}</td>
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

export default Allstudentdata