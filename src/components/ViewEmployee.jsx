import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import "./ViewEmployee.css";
import axios from 'axios';

class ViewEmployee extends Component {
    constructor(){
        super();
        this.state ={
            list:[],
            editid:""
        }
    }
    componentDidMount(){
    const axios = require('axios');
    axios.get("http://localhost:3000/users").then(
        res => res.data).then((data)=>{
            this.setState({list : data})
        }) 
       
    }
   
    render(){
        const deleteEmployee = (id) =>{
            console.log(id);
           const axios= require('axios');
          axios.delete('http://localhost:3000/users/' +id)
          .then(res => {
              const data = this.state.list.filter(x =>x.id !== id);
              this.setState({
                  list:data
              })
      })
      .catch(err => {
        console.log(err);
      });
  };


  const editEmployee = (id) =>{
    this.setState({
        editid : id
    })
  }
           
          
  const renderHeader = () => {
    let headerElement = ["id", "name", "email", "phone", "update", "remove"];

    return headerElement.map((key, index) => {
      return (
        <th key={index} style={{ width: "120px" }}>
          {key.toUpperCase()}
        </th>
      );
    });
  };

  const renderBody = () => {
    return this.state.list.map(({ id, name, email, salary },index) => {
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>

          <td>{salary}</td>

          <td className="opration">
            <button onClick={editEmployee.bind(this,id)}>Edit</button>
          </td>
          <td className="opration">
            <button onClick={deleteEmployee.bind(this,id)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <div style={{marginTop:"5%"}}>
        <h3 id="title">Employee Table</h3>
        <br/>
        <table id="employee">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </div>
      {(this.state.editid !== "")?
       (
       <Redirect to={{
           pathname: "/addemployee",
           state: { editid: this.state.editid }
       }} />):null}
    </>
  );
    }
};

export default ViewEmployee;