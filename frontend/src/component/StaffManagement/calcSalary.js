import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import './employee.css';

import "react-datepicker/dist/react-datepicker.css";
import { number } from 'prop-types';

export default class CalcSalary extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeBasicSalary = this.onChangeBasicSalary.bind(this);
        this.onChangeOTHours = this.onChangeOTHours.bind(this);
        this.onChangeOTPay = this.onChangeOTPay.bind(this);
        this.onChangeTotalSalary = this.onChangeTotalSalary.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            date: new Date(),
            basicSalary: '',
            otHours: '',
            otPay: '',
            totalSalary: '',
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onChangeBasicSalary(e) {
        this.setState({
            basicSalary: e.target.value
        });
    }

    onChangeOTHours(e) {
        this.setState({
            otHours: e.target.value
        });
    }

    onChangeOTPay(e) {
        this.setState({
            otPay: e.target.value
        });
    }

    onChangeTotalSalary(e) {
        this.setState({
            totalSalary: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const salary = {
            name: this.state.name,
            date: this.state.date,
            basicSalary: this.state.basicSalary,
            otHours: this.state.otHours,
            otPay: this.state.otPay,
            totalSalary: this.state.totalSalary
        }

        console.log(salary);

        axios.post('http://localhost:8070/salary/add', salary)
            .then(res => console.log(res.data));

        alert("Salary Entry Added!");
        window.location = '/viewSalary'
    }

    calcSalaryDemo = () => {
        this.setState({
            name: ""
        });
        this.setState({
            basicSalary: ""
        });
        this.setState({
            otHours: ""
        });
        this.setState({
            otPay: ""
        });

    }



    render() {
        return (

            <div className="calcSalaryPage">

                <br/><br/>
                <div className="searchButton">
                    <button className="viewAllSalaryBtn"><Link className="toviewSalaryPage" to="/viewSalary">View All Salary Details</Link></button>&nbsp;
                    <button className="searchEmployeeBtn"><Link className="toSearchEmployeePage" to="/searchSalary">Search Salary Details</Link></button>
                </div><br/><br/>
                
                <div className="container" id="calcForm">
                    
                    <form onSubmit={this.onSubmit}>
                        <h3 className="calcSalaryTitle">EMPLOYEE SALARY CALCULATION</h3>
                        <br />
                        <div className="form-group">
                            <label>Date: </label>
                            <div>
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.onChangeDate}
                                />
                            </div>
                            <br />
                        </div>
      
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                        </div>

                        <br />
                        <div className="form-group">
                            <label>Basic Salary:<br />  </label>
                            <select
                                value={this.state.basicSalary}
                                onChange={this.onChangeBasicSalary}>
                                <option selected disabled value="">Select</option>
                                <option disabled>Party host</option>
                                <option value="100000">100000</option>
                                <option disabled>Site coordinator</option>
                                <option value="75000">75000</option>
                                <option disabled>Event coordinator</option>
                                <option value="60000">60000</option>
                                <option disabled>Venue manager</option>
                                <option value="35000">35000</option>
                                <option disabled>Social media manager</option>
                                <option value="45000">45000</option>
                                <option disabled>Special events manager</option>
                                <option value="50000">50000</option>
                            </select>

                        </div>
                        <br />
                        <div className="form-group">
                            <label>OT Hours: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.otHours}
                                onChange={this.onChangeOTHours}
                            />
                        </div>

                        <div className="form-group">
                            <label>OT Pay: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.otPay}
                                onChange={this.onChangeOTPay}
                            />
                        </div>

                        <label>Total Salary: </label>
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                value={(parseInt(this.state.basicSalary * 1) + (this.state.otHours * this.state.otPay))}
                                onClick={this.getTotal}
                            />
                        </div>
                        <br />

                        <div className="form-group">
                            <input type="submit" value="ADD TO DATABASE" className="btn btn-primary" onClick={this.getTotal} id="badd" /><br />
                            <br />
                            <button onClick={this.calcSalaryDemo} className="btn btn-primary" id="breset">RESET</button>
                        </div>

                    </form>
                </div>
                <br />
            </div>

        )

    }

}