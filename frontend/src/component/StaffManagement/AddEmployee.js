import axios from 'axios';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './employee.css';
import { Link } from 'react-router-dom';

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNIC = this.onChangeNIC.bind(this);
    this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
    this.onChangeDesignation = this.onChangeDesignation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      employeename: '',
      gender: '',
      email: '',
      nic: '',
      mobileno: '',
      designation: '',
      date: new Date(),

    }
  }

  onChangeEmployeeName(e) {
    this.setState({
      employeename: e.target.value
    })
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeNIC(e) {
    this.setState({
      nic: e.target.value
    })
  }

  onChangeMobileNo(e) {
    this.setState({
      mobileno: e.target.value
    })
  }

  onChangeDesignation(e) {
    this.setState({
      designation: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    }) 
  }

  onSubmit(e) {
    e.preventDefault();

    const employee = { 
      employeename: this.state.employeename,
      gender: this.state.gender,
      email: this.state.email,
      nic: this.state.nic,
      mobileno: this.state.mobileno,
      designation: this.state.designation,
      date: this.state.date
    }

    console.log(employee);

    axios.post('http://localhost:5000/employee/add', employee)
      .then(res => console.log(res.data));

    alert("Successfull Add Employee Details")
    window.location = '/manageStaff';
  }

  addEmployeeDemo = () => {
    this.setState({
      employeename: ""
    });
    this.setState({
      gender: ""
    });
    this.setState({
        email: ""
    });
    this.setState({
        nic: ""
    });
    this.setState({
      mobileno: ""
      });
      this.setState({
        designation: ""
    });
}
  

  render() {
    return (

      <div className="addEven"> <br/>

        <h2 className="addEmployeeTitle">EMPLOYEE REGISTRATION</h2><br></br>
        
        <form onSubmit={this.onSubmit} className="container" >
     
          <div className="form-groupEmployee"><br/>
            
            <label><b>Employee Name: </b></label>
              <input type="text"
                required
                className="form-control"
                value={this.state.employeename}
                placeholder="Enter Employee Name"
                onChange={this.onChangeEmployeeName}
              /><br></br>
          
            <label><b>Gender: </b>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</label>
              <select required value={this.state.gender} onChange={this.onChangeGender} >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select><br></br>         

           <label><b>E-mail: </b></label>
              <input type="text"
                required
                className="form-control"
                value={this.state.email}
                pattern="[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,3}"
                placeholder="Enter E-mail"
                onChange={this.onChangeEmail}
              /><br></br>
        
            <label><b>NIC: </b></label>
              <input type="text"
                required
                className="form-control"
                value={this.state.nic}
                maxLength="10"
                minLength="10" 
                placeholder="Employee NIC"
                onChange={this.onChangeNIC}
              /><br></br>
         
            <label><b>Mobile No: </b></label>
              <input type="text"
                required
                className="form-control"
                value={this.state.mobileno}
                pattern="[0-9]*"
                maxLength="10"
                minLength="10" 
                placeholder="Enter Mobile No"
                onChange={this.onChangeMobileNo}
              /><br></br>
         
            <label><b>Designation: </b>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</label>
              <select required value={this.state.designation} onChange={this.onChangeDesignation}>
                <option>Select</option>
                <option>Party host</option>
                <option>Site coordinator</option>
                <option>Event coordinator</option>
                <option>Venue manager</option>
                <option>Social media manager</option>
                <option>Special events manager</option>
              </select><br/>
                  
            <label><b>Date: </b></label>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              /><br/><br/>

            
            <input type="submit" value="ADD EMPLOYEE" className="btn btn-primary" id="badd" /><br/>
            <button onClick={this.addEmployeeDemo} className="btn btn-primary" id="breset">RESET</button><br/><br/>
         
            
          </div>
           
        </form><br/><br/><br/><br/><br/><br/>

      </div>

    )
  }
}