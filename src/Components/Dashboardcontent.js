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
        <h4>Courses Overview</h4>
        <br/>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="green" class="overicona" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              <p className='coverv'>Raesh Sing Rs5400, Paid</p>
              <p className='coverd'>22 FEB 7:20 PM</p>
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="overicona" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              <p className='coverv'>New order #1832412</p>
              <p className='coverd'>21 FEB 11 PM</p>
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="overicona" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <p className='coverv'>New order #1832412</p>
              <p className='coverd'>21 FEB 11 PM</p>
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="overicona" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
              </svg>
              <p className='coverv'>Unlock packages for development</p>
              <p className='coverd'>18 FEB 4:54 PM</p>
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="overicona" viewBox="0 0 16 16">
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <p className='coverv'>Unlock packages for development</p>
              <p className='coverd'>18 FEB 4:54 PM</p>
            </div>
        </div>
     </div>
     </div>
    </>
  )
}

export default Dashboardcontent