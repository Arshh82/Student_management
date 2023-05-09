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
        <div className='Dtext'><p className='fw-bold' style={{fontSize:"60px"}}>Dashboard</p></div>
        <div className='parentdiva'>
        <div className='info' >
         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" className="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          </svg>
           <p className='Tcounth'>Total Students <br/><center><span className='tCount'>45</span></center></p>
         </div>
         <div className='info'>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" class="bi bi-person-workspace" viewBox="0 0 16 16">
            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
          </svg>
           <p className='Tcounth'>Total Teachers <br/><center><span className='tCount'>5</span></center></p>
         </div>
         <div className='info'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" class="bi bi-book" viewBox="0 0 16 16">
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
           <p className='Tcounth'>Total Courses <br/><center><span className='tCount'>{data.length}</span></center></p>
         </div>
         
     </div>
     <div className='parentdivb'>
        <div className='coursepanela'>
        <h3>Our Courses</h3>
        {/* <p>Done this Month</p> */}
      
       <table className='table '>
        <thead className="thead-dark">
          <tr style={{backgroundColor
        :'white'}}>
            <th>Course Name</th>
            <th>Amount</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody className='tablee' style={{color
        :'white'}}>
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