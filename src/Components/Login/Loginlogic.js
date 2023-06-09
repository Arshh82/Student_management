import '../../App.css';
import React, { useEffect, useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Label } from 'reactstrap';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { PersonAdd } from '@mui/icons-material'
const Loginlogic = () => {
  let navigate=useNavigate()
  let [data,updatedata]=useState([]);
  let [product,updateproduct]=useState({name:'',email:'',contact:'',password:''});
  useEffect(()=>{
    show();
  });  
  async function show()
  {
    var res=await axios.get("https://princestudentapi.onrender.com/Registration//");
    updatedata(res.data);
  }
  function change(e)
  {
    updateproduct({...product,[e.target.name]:e.target.value});
  }
  return (
    <>
      <div className="add">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            async function addData() {
              var res = await axios.post(
                "https://princestudentapi.onrender.com/Registration//",
                product
              );
              alert("Sucess");
              navigate('/');
              
            }
            addData();
          }}
        >
          <div className="col-lg-12 " id="formcl">
          <center>
          <PersonAdd sx={{ fontSize: 35 }}/><br/><br/>
          <h2>User Ragistration</h2></center>
            <br/>
            <Row>
              <Col lg={6}>
                <div>
                  <Label abel htmlFor="Name">
                    Name
                  </Label>
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={change}
                    className="form-control"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <Label htmlFor="Email">Email</Label>
                  <input
                    type="email"
                    name="email"
                    value={product.email}
                    onChange={change}
                    className="form-control"
                  />
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={6}>
                <div>
                  <Label htmlFor="Address">Contact</Label>
                  <input
                    type="text"
                    name="contact"
                    value={product.contact}
                    onChange={change}
                    className="form-control"
                  />
                  <br />
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <Label htmlFor="Password">Password</Label>
                  <input
                    type="text"
                    name="password"
                    value={product.password}
                    onChange={change}
                    className="form-control"
                  />
                </div>
              </Col>
            </Row>
            <br />
            <center>
              <button className="btn btn-primary" type="submit" id="subbtn">
                Sign Up
              </button>
              <br />
              <br />
              <p style={{ fontSize: "20px" }}>Already Have Account ?</p>
              <Link to="/">
                <button className="btn btn-danger" type="submit">
                  Click To Log in
                </button>
              </Link>
            </center>
          </div>
        </form>
      </div>
    </>
  );
}
export default Loginlogic