
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../App.css";
import Allstudentdata from "./Allstudentdata";
import axios from "axios";
import { Modal, ModalBody, Row , Col } from 'reactstrap'; 
import { ModalHeader } from 'reactstrap';
import Coursetabledata from "./Coursetabledata";

const CourseAdd = () => {
    const [modal,updatemodal] = useState(false)
    let [data, updatedata] = useState([]);
    let [product, updateproduct] = useState({
        name: "",
        fees: "",
        duration: "",
        comments: "",
    });
    useEffect(() => {
      show();
    });
    async function show() {
      var res = await axios.get(
        "https://princestudentapi.onrender.com/Course//"
      );
      updatedata(res.data);
      // console.log(res);
    }
    function change(e) {
      updateproduct({ ...product, [e.target.name]: e.target.value });
    }
  return (
    <>
      <Sidebar />
      <div className="allstuparentdiva">
        <div>
          <Modal size="lg" isOpen={modal} toggle={() => updatemodal(!modal)}>
            <ModalHeader toggle={() => updatemodal(!modal)}></ModalHeader>
            <ModalBody>
              <center>
                <h3>Course Add</h3>
              </center>
              <br />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  async function addData() {
                    var res = await axios.post(
                      "https://princestudentapi.onrender.com/Course//",
                      product
                    );
                    alert("Sucess");
                    if (res.status === 200) {
                      alert("Ragister Successful");
                    }
                  }
                  addData();
                }}
              >
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="course_name">Course Name</label>
                      <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={change}
                        className="form-control"
                        placeholder="Enter Course Name"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="fees_amount">Fees Amount</label>
                      <input
                        type="number"
                        name="fees"
                        value={product.fees}
                        onChange={change}
                        className="form-control"
                        placeholder="Fees Amount"
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="duration ">Duration</label>
                      <input
                        type="text"
                        name="duration"
                        value={product.duration}
                        onChange={change}
                        className="form-control"
                        placeholder="Duration "
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="Comments">Comments</label>
                      <input
                        type="text"
                        name="comments"
                        value={product.comments}
                        onChange={change}
                        className="form-control"
                        placeholder="Comments"
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <center>
                  <button className="btn btn-danger " type="submit">
                    Submit 
                  </button>
                </center>
              </form>
            </ModalBody>
          </Modal>
        </div>
        <button className="allstuchilddiva" onClick={() => updatemodal(true)}>
          <h4>Add Course </h4>
        </button>
      </div>
      <div className="allstuparentdivb">
        <div className="allstuchilddivb">
          <Coursetabledata/>
        </div>
      </div>
    </>
  )
}

export default CourseAdd