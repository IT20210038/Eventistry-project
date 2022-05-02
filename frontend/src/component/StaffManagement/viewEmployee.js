import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './employee.css';

const Employee = props => (
    <tr>
      <td>{props.employee.employeename}</td>
      <td>{props.employee.gender}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.nic}</td>
      <td>{props.employee.mobileno}</td>
      <td>{props.employee.designation}</td>
      <td>
        <Link to={"/editEmployee/" + props.employee._id}><b>UPDATE</b></Link> | <a href="#" id="linkButton" onClick={() => { props.deleteEmployee(props.employee._id) }}><b>DELETE</b></a>
      </td>
    </tr>
  )
  
  export default class ViewEmployee extends Component {
    constructor(props) {
      super(props);
  
      this.deleteEmployee = this.deleteEmployee.bind(this)
  
      this.state = { employee: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/employee/')
          .then(response => {
            this.setState({ employee: response.data })
          })
          .catch(error => {
            console.log(error);
          })
      }

      deleteEmployee(id) {
        axios.delete('http://localhost:8070/employee/' + id)
          .then(response => { console.log(response.data) });
    
        alert("Are you sure you want to delete the following employee details from the system?")
        this.setState({
          employee: this.state.employee.filter(sml => sml._id !== id)
        })
      }

      EmployeeList() {
        return this.state.employee.map(currentemployee => {
          return <Employee employee={currentemployee} deleteEmployee={this.deleteEmployee} key={currentemployee._id} />;
        })
      }
    
      render() {
        return (
          <div className="EmployeeList"><br /><br /><br />
          <div className="searchButton">
            <button className="searchEmployeeBtn" ><Link className="toSearchEmployeePage" to="/SearchEmployee" >Search Employee</Link></button></div><br /><br />
  
          <h2 className="addEmployeeTitle">ALL EMPLOYEE DETAILS</h2><br></br><br></br>
          <div className='container' id="EmployeeListForm">
          
          <table id="table" className="container">
  
            <tr>
              <th>Employee Name</th>

              <th>Gender</th>

              <th>Email</th>
  
              <th>NIC</th>
  
              <th>MobileNo</th>
  
              <th>Designation</th>
  
              <th>Actions</th>
  
            </tr>
  
          <tbody>
            {this.EmployeeList()}
          </tbody>
          </table><br/><br/><br/><br/>
       
          <div className="form-btn">
              <button className="btn btn-primary" id="bdatabase"><Link className="toemployeeReportPage" to="/employeeReport" >GENERATE REPORT</Link></button><br/><br/>
          </div>
        </div>
        <br /><br /><br />
        </div>
      
    )
  }
}