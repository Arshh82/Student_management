import React, { useEffect, useState } from 'react'
import '../App'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const Dashboardcontent = () => {
  let [data,updatedata]=useState([]);
  let [course,updatecourse]=useState({name:'',fees:'',duration:'',comments:''});
  useEffect(()=>{
    show();
  })
  async function show(){
    var res=await axios.get("https://princestudentapi.onrender.com/Course//");
    updatedata(res.data);
  }
  function change(e)
  {
    updatecourse({...course,[e.target.name]:e.target.value});
  }
  return (

    <>
        <div className='pdaaa'>
        <div className='parentdiva'>
         <div className='info' >
         <div id='nav'></div> 
           <h4>Total 9 Student </h4>
         </div>
         <div className='info'>
           <h4>Total {data.length} Courses</h4>
         </div>
         
     </div>
     <div className='parentdivb'>
        <div className='coursepanela'>
        <h3>Our Courses</h3>
        {/* <p>Done this Month</p> */}
      
       <table className='table table-hover '>
        <thead className="thead-light">
          <tr>
            <th>Course Name</th>
            <th>Amount</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v)=>{
            return(<tr key={v.id}>
              <td>{v.name}</td>
              <td>{v.fees}</td>
              <td>{v.duration}</td>
            </tr>)
          })}
        </tbody>
      </table>
        </div>
        <div className='coursepanelb'>
        <p>Courses Overview</p>
        </div>
     </div>
     </div>
    </>
  )
}

export default Dashboardcontent