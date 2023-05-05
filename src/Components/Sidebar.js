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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="dlst">
          <ul>
            <hr style={{ color: "white" }}></hr>
            <Link to="/dashboard">
              <li>
                <span>Dashboard</span>
              </li>
            </Link>
            <Link to="/allstudents">
              <li>
                <span>All Students</span>
              </li>
            </Link>
            <Link to="/courseadd">
              <li>
                <span>Courses</span>{" "}
              </li>
            </Link>
            <Link to="/addteacher">
              <li>
                <span>Teacher</span>{" "}
              </li>
            </Link>
            <li>
              <span>Settings</span>{" "}
            </li>
            <hr style={{ color: "white" }}></hr>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar
