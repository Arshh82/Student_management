import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../App.css";
import Allstudentdata from "./Allstudentdata";
import axios from "axios";
import { Modal, ModalBody, Row , Col } from 'reactstrap'; 
import { ModalHeader } from 'reactstrap';

const Allstudents = () => {
  
    const [modal,updatemodal] = useState(false)
    let [data, updatedata] = useState([]);
    let [product, updateproduct] = useState({
      sname: "",
      semail: "",
      smobile: "",
      saddress: "",
      scollege: "",
      sdegree: "",
      total_amount: "",
      paid_amount: "",
      due_amount: "",
      scourse: "",
    });
    useEffect(() => {
      show();
    });
    async function show() {
      var res = await axios.get(
        "https://princestudentapi.onrender.com/AddStudent//"
      );
      updatedata(res.data);
      // console.log(res);
    }
    function change(e) {
      updateproduct({ ...product, [e.target.name]: e.target.value });
    }
      const [values, setValues] = useState([]);
  const [option, setOptions] = useState();
  useEffect(() => {
    fetch("https://princestudentapi.onrender.com/Course//")
      .then((data) => data.json())
      .then((val) => setValues(val));
  }, []);
  return (
    <>
    
      <Sidebar />
      
      
      <div className='pdaaaa'>
      <div className='Dtext'><p className='fw-bold' style={{fontSize:"60px"}}>Student Panel</p></div>
      
      <div className="allstuparentdiva">
        <div>
        
          <Modal size="lg" isOpen={modal} toggle={() => updatemodal(!modal)}>
            <ModalHeader toggle={() => updatemodal(!modal)}></ModalHeader>
            <ModalBody>
              <center>
                <h3>Student Ragistration</h3>
              </center>
              <br />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  async function addData() {
                    var res = await axios.post(
                      "https://princestudentapi.onrender.com/AddStudent//",
                      product
                    );
                    alert("Sucess");
                    updatemodal(false)
                  }
                  addData();
                }}
              >
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="sname"
                        value={product.sname}
                        onChange={change}
                        className="form-control"
                        placeholder="EnterName"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="semail"
                        value={product.semail}
                        onChange={change}
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="mobile">Mobile No.</label>
                      <input
                        type="number"
                        name="smobile"
                        value={product.smobile}
                        onChange={change}
                        className="form-control"
                        placeholder="Mobile No."
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        name="saddress"
                        value={product.saddress}
                        onChange={change}
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="college">College</label>
                      <input
                        type="text"
                        name="scollege"
                        value={product.scollege}
                        onChange={change}
                        className="form-control"
                        placeholder="College"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="degree">Degree</label>
                      <input
                        type="text"
                        name="sdegree"
                        value={product.sdegree}
                        onChange={change}
                        className="form-control"
                        placeholder="Degree"
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6}>
                    <div>
                      <label htmlFor="total_mount">Total Amount</label>
                      <input
                        type="number"
                        name="total_amount"
                        value={product.total_amount}
                        onChange={change}
                        className="form-control"
                        placeholder="Total Amount"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <label htmlFor="paid_mount">Paid Amount</label>
                      <input
                        type="number"
                        name="paid_amount"
                        value={product.paid_amount}
                        placeholder="Paid Amount"
                        onChange={change}
                        className="form-control"
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6}>
                    <div>
                      <label htmlFor="due_mount">Due Amount</label>
                      <input
                        type="number"
                        name="due_amount"
                        value={product.due_amount}
                        onChange={change}
                        className="form-control"
                        placeholder="Due Amount"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <label htmlFor="Select_Course">Select Course</label>
                      <select onChange={change} name="scourse">
                        {values.map((optn, i) => (
                          <option key={i} value={optn.url}>
                            {optn.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                </Row>
                <br />
                <center>
                  <button className="btn btn-danger " type="submit">
                    Sign Up
                  </button>
                </center>
              </form>
            </ModalBody>
          </Modal>
        </div>
        
        <button className="allstuchilddiva" onClick={() => updatemodal(true)}>
          <center><h4>Add a Student</h4></center>
        </button>
      </div>
      <div className="allstuparentdivb">
        <div className="allstuchilddivb">
          <Allstudentdata />
        </div>
      </div>
      </div>
    </>
  );
};

export default Allstudents;
