import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

//let Siginp = new URL ("/public/images/logbackground/stuu.jpg",import.meta.url)

const Signinlog = () => {
  let navigate = useNavigate();
  let [data, updatedata] = useState({ email: "", password: "" });
  function change(e) {
    updatedata({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="addd">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            async function signup() {
              let d = await axios.get(
                "https://princestudentapi.onrender.com/Registration//"
              );
              d = await d.data;
              let c = 0;
              for (var i of d) {
                if (data.email === i.email && data.password === i.password) {
                  c++;
                  break;
                }
              }
              if (c === 0) {
                alert("Invalid user id and password");
              } else {
                alert("Log In Successfull");
                navigate("/dashboard");
              }
            }
            signup();
          }}
        >
          <div className="col-sm-3 " id="testtd">
            <br />
            <center>
              <i class="gg-user"></i>

              <h2>User Log in </h2>
            </center>
            <br />
            <label htmlFor="user_name">User Name</label> <br />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={change}
              className="form-control"
            />
            <br />
            <label htmlFor="user_name">Password</label> <br />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={change}
              className="form-control"
            />
            <br />
            <center>
              <button className="btn btn-primary" type="submit" id="subbtn">
                Log in
              </button>
            </center>
            <br />
            <br />
            <br />
            {/* <p style={{fontSize:'22px'}}>New User CLick </p>  */}
            <Link to="/signin">
              <button className="btn text-light" type="submit">
                New User ? Click Here To Ragister
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signinlog;
