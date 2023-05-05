import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Teachertabledata = () => {
    let [data, updatedata] = useState([]);
    let [stud, updatestud] = useState({
        teachername: "",
        employeesid: "",
        teacheremail: "",
        teacherpassword: "",
        teachermobile: "",
        joindate: "",
        education: "",
        workexp: "",
        photo: "",
        gender: "",
        is_active: "",
        teachercourse: "",
    });
    useEffect(() => {
      show();
    });
    async function show() {
      var res = await axios.get(
        "https://princestudentapi.onrender.com/Teacher//"
      );
      updatedata(res.data);
    }
    function change(e) {
      updatestud({ ...stud, [e.target.name]: e.target.value });
    }
  return (
    <>
    <div>
    <table className='table table-hover '>
        <thead className=" thead-danger">
          <tr>
            <th>Teacher Name</th>
            <th>Employe Id</th>
            <th>E-Mail</th>
            <th>Password</th>
            <th>Mobile No.</th>
            <th>Join Date</th>
            <th>Education</th>
            <th>Work Exp</th>
            {/* <th>Photo</th> */}
            <th>Gender</th>
            <th>Is Active</th>
            {/* <th>Teacher Course</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((v)=>{
            return(<tr key={v.id}>
              <td>{v.teachername}</td>
              <td>{v.employeesid}</td>
              <td>{v.teacheremail}</td>
              <td>{v.teacherpassword}</td>
              <td>{v.teachermobile}</td>
              <td>{v.joindate}</td>
              <td>{v.education}</td>
              <td>{v.workexp}</td>
              {/* <td>{v.photo}</td> */}
              <td>{v.gender}</td>
              <td>{v.is_active===true?"Yes":"No"}</td>
              {/* <td>{v.teachercourse}</td> */}
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

export default Teachertabledata