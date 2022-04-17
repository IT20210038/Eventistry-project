import React, { useState, useEffect } from "react";
import axios from "axios";
import './viewPayments';


function SearchBar() {
    const [search, setSearch] = useState('');
    const [PaymentsManage, setPayments] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8074/Payments/')
            .then((response) => {
                setPayments(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            PaymentsManage.filter((PaymentsManage) => PaymentsManage.DocumentNo.toLowerCase().includes(search.toLowerCase())) ||
            PaymentsManage.filter((PaymentsManage) => PaymentsManage.id.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], PaymentsManage)


    return (
        <div className="searchPaymentsDetailsPage">
            <br />
            <h3 className="searchPaymentsTitle">Search Payments Details</h3><br /><br /><br />
            <div className='container' id="searchEmployeeForm">
                <h5 className="searchPayments">Enter Invoice No to view Payments Details </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <h2 className="AddPaymentsTitle">Payments</h2><br></br><br />
                <div className='container'  id="PaymentsListForm"></div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Document No</th>
                            <th>Invoice No</th>
                            <th>Name</th>
                            <th>Payment Details</th>
                            <th>date</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    
                    <tbody className="search">
                    <thead className="thead-light">
                        <tr>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.DocumentNo}</td>
                                <td>{val.InvoiceNo}</td>
                                <td>{val.BilltoName}</td>
                                <td>{val.PaymentDetails}</td>
                                <td>{val.date}</td>
                                <td>{val.TotalAmount}</td>
                            </div>
                        })}
                              </tr>
                    </thead>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBar;