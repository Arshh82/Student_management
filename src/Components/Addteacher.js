import React from 'react'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal, ModalBody, Row , Col } from 'reactstrap'; 
import { ModalHeader } from 'reactstrap';
import Teachertabledata from './Teachertabledata';

const Addteacher = () => {
    const [modal,updatemodal] = useState(false)
    let [data, updatedata] = useState([]);
    let [product, updateproduct] = useState({
      teachername: "",
      employeesid:'',
      teacheremail: "",
      teacherpassword: "",
      teachermobile: "",
      joindate: "2023-05-04",
      education: "",
      workexp: "",
      photo: "https://princestudentapi.onrender.com/media/Teacher/dummy_pVAgr9Q.jpg",
      gender: "M",
      is_active: "true",
      teachercourse: "https://princestudentapi.onrender.com/Course//10/"
    });
    useEffect(() => {
      show();
    });
    async function show() {
      var res = await axios.get(
        "https://princestudentapi.onrender.com/Teacher//"
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
  function ImageUpload(){
    var [image,setImage]=useState('')
    
    function handleApi(){
      const formData = new FormData()
      formData.append('image',image)
      axios.post('url',formData).then((res) => {
        console.log(res)
      })
    }
  }
  return (
    <>
    <Sidebar/>
    <div className="allstuparentdiva">
        <div>
          <Modal size="lg" isOpen={modal} toggle={() => updatemodal(!modal)}>
            <ModalHeader toggle={() => updatemodal(!modal)}></ModalHeader>
            <ModalBody>
              <center>
                <h3>Add Teacher</h3>
              </center>
              <br />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  async function addData() {
                    var res = await axios.post(
                      "https://princestudentapi.onrender.com/Teacher//",
                      product
                    );
                    alert("Sucess");
                    if (res.status === 200) {
                      alert("Added Successfully");
                    }
                  }
                  addData();
                }}
                encType='multipart/form-data'
              >
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="teachername"
                        value={product.teachername}
                        onChange={change}
                        className="form-control"
                        placeholder="EnterName"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="id">Id No. </label>
                      <input
                        type="number"
                        name="employeesid"
                        value={product.employeesid}
                        onChange={change}
                        className="form-control"
                        placeholder="Id Number "
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="email">E-Mail</label>
                      <input
                        type="email"
                        name="teacheremail"
                        value={product.teacheremail}
                        onChange={change}
                        className="form-control"
                        placeholder="Email Id"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="teacherpassword"
                        value={product.teacherpassword}
                        onChange={change}
                        className="form-control"
                        placeholder="Enter Password"
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="mobile_no.">Mobile No.</label>
                      <input
                        type="number"
                        name="teachermobile"
                        value={product.teachermobile}
                        onChange={change}
                        className="form-control"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="join_date">Join Date</label>
                      <input
                        type="date"
                        name="joindate"
                        onChange={change}
                        className="form-control"
                        placeholder="Join Date"
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6}>
                    <div>
                      <label htmlFor="education">Education</label>
                      <input
                        type="text"
                        name="education"
                        value={product.education}
                        onChange={change}
                        className="form-control"
                        placeholder="Education"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <label htmlFor="paid_mount">Work Experiance</label>
                      <input
                        type="text"
                        name="workexp"
                        value={product.workexp}
                        placeholder="Work Experiance"
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
                    <label htmlFor="Select_Gender">Select Gender</label>
                    <select class="form-control" name="gender" >
                <option value="O">Other</option>
                <option value="F">Female</option>
                <option value="M">Male</option>
               </select>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <label htmlFor="Select_Course">Select Course</label>
                      {/* <select onChange={change} name="scourse" className="form-control">
                        {values.map((optn,i) => (
                          <option key={i} value={optn.url}>
                            {optn.name}
                          </option>
                        ))}
                      </select> */}
                    </div>
                  </Col>
                </Row>
                <br/>
                <Row>
                <Col md={6}> 
                {/* <div>
                
                <input type="checkbox" name="is_active" value="true" onChange={change} /><br/>
                <label htmlFor="IsActive"><span> Is Active</span></label>
                </div> */}
               </Col>
               <Col md={6}>
               <input name="file" type="file"  onChange={function handleImage(e){
      setImage(e.target.files[0])
    }}/>
               </Col>
               </Row>
               <br/>
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
          <h4>Add Teacher </h4>
        </button>
      </div>
      <div className="allstuparentdivb">
        <div className="allstuchilddivb">
        <Teachertabledata/>
        </div>
      </div>
    </>
  )
}

export default Addteacher