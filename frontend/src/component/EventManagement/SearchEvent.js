import React, { useState, useEffect } from "react";
import axios from "axios";
import './viewEvent.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [events, setEvent] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8070/events/')
            .then((response) => {
                setEvent(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            events.filter((events) => events.EventId.toLowerCase().includes(search.toLowerCase())) ||
            events.filter((events) => events.id.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], events)


    return (
        <div className="searchEventPage">
            <br />
            <h3 className="searchEventTitle">SEARCH EVENT DETAILS</h3><br /><br /><br />
            <div className='container' id="searchEventForm">
                <h5 className="searchEvent">Enter Evente ID to view event Details </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>EventId</th>
                        <th>EventType</th>
                        <th>EventPlace</th>
                        <th>NumberOfguests</th>
                        <th>date</th>
                        <th>EventFee</th>
                        </tr>
                    </thead>
                    </table>  
                    <tbody className="search">
                    <thead className="thead-light">
                        <tr>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.EventId}</td>
                                <td>{val.EventType}</td>
                                <td>{val.EventPlace}</td>
                                <td>{val.NumberOfguests}</td>
                                <td>{val.date}</td>
                                <td>{val.EventFee}</td>
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