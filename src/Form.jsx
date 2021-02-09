import React, { useState } from "react";
import axios from 'axios';

import "./Form.css";
const API_URL= "http://localhost:3000/users"

const Form = () => {
  const [data, setData] = useState({
    details: {
      id: "",
      name: "",
      email: "",
      salary: ""
    },
    isedit: "",
    show: 0,
    btnValue : "Add"
  });
  
 const addemployee = (e) =>{
     e.preventDefault();
    
const axios = require('axios');
  axios.post('http://localhost:3000/users',{

      id: data.details.id,
      name: data.details.name,
      email: data.details.email,
      salary: data.details.salary
     }).then(response => {
      alert("Data added successfully!!");
      setData({
          ...data,
          details:{
              id:"",
              name:"",
              email:"",
              salary:""
          }
      })
    }).catch(error =>{
        console.log(error);
    });
  
  
 }
 
  

  const handleInput = e => {
      console.log('hello');
    const { name, value } = e.target;
    setData({
      ...data,
      details: {
        ...data.details,
        id: Math.floor(Math.random() * 300) + 1000,
        [name]: [value]
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={addemployee}
              style={{ width: "500px", marginLeft: "80%" }}>
              <div 
                style={{
                  color: "rgb(46, 125, 50)",
                  background: "rgb(200, 230, 201)",
                  border: "1px solid black"
                }}
                id="contact-form"
                className="form-container"
                data-form-container
              >
                <div className="row">
                  <div className="form-title">
                    <span
                      style={{ marginLeft: "150px", fontFamily: "cursive" }}
                    >
                      <b>Add Employee</b>
                    </span>
                    <span
                      className="close"
                      style={{ marginLeft: "99px", marginTop: "3px" }}
                    >
                      x
                    </span>
                  </div>
                </div>
                <div className="input-container">
                  <div className="row">
                    <span
                      className="req-input"
                      style={{ background: "lightgreen" }}
                    >
                      <span
                        className="input-status"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Enter Employee Name."
                      >
                        {" "}
                      </span>
                      <input
                        type="text"
                        data-min-length="8"
                        placeholder="Employee Name"
                        name="name"
                        value={data.details.name}
                        onChange={handleInput}
                        required
                      />
                    </span>
                  </div>
                  <br />
                  <div className="row">
                    <span
                      className="req-input"
                      style={{ background: "lightgreen" }}
                    >
                      <span
                        className="input-status"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Enter Employee Email."
                      >
                        {" "}
                      </span>
                      <input
                        type="email"
                        placeholder="Employee Email"
                        name="email"
                        value={data.details.email}
                        onChange={handleInput}
                        required
                      />
                    </span>
                  </div>
                  <br />
                  <div className="row">
                    <span
                      className="req-input"
                      style={{ background: "lightgreen" }}
                    >
                      <span
                        className="input-status"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Enter Employee Salary."
                      >
                        {" "}
                      </span>
                      <input
                        type="text"
                        placeholder="Employee Salary"
                        name="salary"
                        value={data.details.salary}
                        onChange={handleInput}
                        required
                      />
                    </span>
                  </div>
                  <br />
                  <div className="row submit-row">
                    <button
                      type="submit"
                      className="btn btn-block submit-form"
                      style={{ fontSize: "25px", width: "180px" }}
                    >
                     {data.btnValue}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Form;