import React, { useState, useEffect } from "react";
import axios from "axios";
import './employee.css';

function SearchSalary() {
    const [search, setSearch] = useState('');
    const [salary, setSalary] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8070/salary/')
            .then((response) => {
                setSalary(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            salary.filter((salary) => salary.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], salary)


    return (
        <div className="searchSalaryPage">
            <br />
            <div className='container' id="searchSalaryForm">
                <h3 className="searchSalaryTitle">SEARCH SALARY DETAILS</h3>
                <h5>Enter employee name to view salary details </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Employee Salary Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}><b>
                                <td>{val.date}</td>
                                <td>{val.name}</td>
                                <td>{val.totalSalary}</td></b>
                            </div>
                        })}
                    </tbody>
                </table>
            </div><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default SearchSalary;