import React from 'react'
import '../App'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboardcontent from './Dashboardcontent'
import { Route,routes } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <>
    
      <div class="side-menu">
        <div className="dlst">
          <ul>
            <hr style={{ color: "white" }}></hr>
            <br/>
            <Link style={{ textDecoration: 'none' }} to="/dashboard">
              <li>
                <h3>Dashboard</h3>
              </li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/allstudents">
              <li>
                <h3 >All Students</h3>
              </li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/courseadd">
              <li>
                <h3 >Courses</h3>
              </li>
            </Link>
            <Link style={{ textDecoration: 'none'} } to="/addteacher">
              <li>
                <h3>Teacher</h3>
              </li>
            </Link>
            <li>
              <h3 >Settings</h3>
            </li>
            <br/>
            <hr style={{ color: "white" }}></hr>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar
