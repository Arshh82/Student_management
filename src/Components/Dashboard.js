import React from 'react'
import '../App.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboardcontent from './Dashboardcontent'
import { Route,routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'


const Dashboard = () => {
  return (
  <>
 
        <Sidebar/>
    <Dashboardcontent/>
     
        
   </>     
  )
}

export default Dashboard
