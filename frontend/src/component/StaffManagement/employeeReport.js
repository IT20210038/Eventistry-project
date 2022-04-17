import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'

const Employee = props => (
    <tr>
        <td>{props.employee.employeename}</td>
        <td>{props.employee.gender}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.nic}</td>
        <td>{props.employee.mobileno}</td>
        <td>{props.employee.designation}</td>
        <td>{props.employee.date}</td>
    </tr>
)

export default class pdfGenerator extends PureComponent {

    //initializing the constructor
    constructor(props) {
        super(props)

        this.state = {
            employee: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/employee/')
            .then(response => {
                this.setState({ employee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    employeeDetailsList() {
        return this.state.employee.map(currentemployee => {
            return <Employee employee={currentemployee} deleteEmployee={this.deleteEmployee} key={currentemployee._id} />;
        })
    }

    //jspdf generator function

    jsPdfGenerator = () => {
        //new document in jspdf

        var doc = new jsPDF('p', 'pt');

        doc.autoTable({ html: '#employeeDetailsTable' })

        doc.save("Employee_Details_Report.pdf");
    }



    render() {
        return (
            <div className='viewEmployeePage'>
                <br />
                <div className='container' id="viewEmployeeForm">
                    <h3 className="reportEmployeeTitle">EMPLOYEE DETAILS</h3><br />
                    <table className="table" id="employeeDetailsTable">
                        <thead className="thead-light">
                            <tr>
                                <th>Employee Name</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>NIC</th>
                                <th>Mobile No</th>
                                <th>Designation</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.employeeDetailsList()}
                        </tbody>
                    </table>
                    <br />
                    <button className='report-btn' onClick={this.jsPdfGenerator}>GENERATE REPORT</button>

                </div><br /><br /><br />
                
            </div>
        )
    }
}