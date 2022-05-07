import React, { useState, useEffect } from "react";
import axios from "axios";
import './SearchService.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [ServicesManage, setservices] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8070/services/')
            .then((response) => {
                setservices(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            ServicesManage.filter((ServicesManage) => ServicesManage.name.toLowerCase().includes(search.toLowerCase())) ||
            ServicesManage.filter((ServicesManage) => ServicesManage.id.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], ServicesManage)


    return (
        <div className="searchServicePage">
            <br />
            <h3 className="searchServiceTitle">SEARCH SEARVICE DETAILS</h3><br /><br /><br />
            <div className='container' id="searchServiceForm">
                <br />
                <input className="searchB" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>PhoneNo</th>
                        <th>Fee</th>
                        </tr>
                    </thead>
                    </table>  
                    <tbody className="searchw">
                    <thead className="thead-light">
                        <tr>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.name}</td>
                                <td>{val.type}</td>
                                <td>{val.phoneno}</td>
                                <td>{val.fee}</td>
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