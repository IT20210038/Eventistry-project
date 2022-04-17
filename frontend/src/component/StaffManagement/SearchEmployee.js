import React, { useState, useEffect } from "react";
import axios from "axios";
import './employee.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [employee, setEmployee] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/employee/')
            .then((response) => {
                setEmployee(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            employee.filter((employee) => employee.employeename.toLowerCase().includes(search.toLowerCase())) ||
            employee.filter((employee) => employee.id.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], employee)


    return (
        <div className="searchEmployeePage">
            <br />
            <h3 className="searchEmployeeTitle">SEARCH EMPLOYEEE DETAILS</h3><br /><br /><br />
            <div className='container' id="searchEmployeeForm">
                <h5 className="searchEmployee">Enter Employee Name to view Patient Details </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Employee Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>NIC</th>
                            <th>MobileNo</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    </table>  
                    <tbody className="search">
                    <thead className="thead-light">
                        <tr>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.employeename}</td>
                                <td>{val.gender}</td>
                                <td>{val.email}</td>
                                <td>{val.nic}</td>
                                <td>{val.mobileno}</td>
                                <td>{val.designation}</td>
                            </div>
                        })}
                              </tr>
                    </thead>
                    </tbody>
                    
            </div><br /><br /><br /><br />
        </div>
    );
}

export default SearchBar;