import React from 'react'
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';
import Allstudents from './Components/Allstudents';
import Dashboardcontent from './Components/Dashboardcontent';
import CourseAdd from './Components/CourseAdd';
import Coursetabledata from './Components/Coursetabledata';
import Addteacher from './Components/Addteacher';
import Teachertabledata from './Components/Teachertabledata';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Signin/> }></Route>
    <Route path='/signin' element={<Login/> }></Route>
    <Route path='/dashboard' element={<Dashboard/> }></Route>
    <Route path='/allstudents' element={<Allstudents/> }></Route>
    <Route path='/dashboardcontent' element={<Dashboardcontent/> }></Route>
    <Route path='/courseadd' element={<CourseAdd/> }></Route>
    <Route path='/coursetabledata' element={<Coursetabledata/> }></Route>
    <Route path='/addteacher' element={<Addteacher/> }></Route>
    <Route path='/teachertable' element={<Teachertabledata/> }></Route>
    </Routes>

  )
}

export default App