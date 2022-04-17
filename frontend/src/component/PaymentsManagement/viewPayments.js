import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './viewPayments.css';

const PaymentsManage = props => (
    <tr>
      <td>{props.PaymentsManage.DocumentNo}</td>
      <td>{props.PaymentsManage.InvoiceNo}</td>
      <td>{props.PaymentsManage.BilltoName}</td>
      <td>{props.PaymentsManage.PaymentDetails}</td>
      <td>{props.PaymentsManage.date.substring(0, 10)}</td>
      <td>{props.PaymentsManage.TotalAmount}</td>
      <td>
        <Link to={"/EditPayments/" + props.PaymentsManage._id}>Edit</Link> | <a href="#" id="ba4" onClick={() => { props.deletePayment(props.PaymentsManage._id) }}>Delete</a>
      </td>
    </tr>
  )
  
  export default class viewPayments extends Component {
    constructor(props) {
      super(props);
  
      this.deletePayment = this.deletePayment.bind(this)
  
      this.state = { PaymentsManage: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8070/payments/')
          .then(response => {
            this.setState({ PaymentsManage: response.data })
          })
          .catch(error => {
            console.log(error);
          })
      }

      deletePayment(id) {
        axios.delete('http://localhost:8070/payments/' + id)
          .then(response => { console.log(response.data) });
    
        alert("Are you sure you want to delete ?")
        this.setState({
          PaymentsManage: this.state.PaymentsManage.filter(sml => sml._id !== id)
        })
      }

      Paymentlist() {
        return this.state.PaymentsManage.map(currentpayment => {
          return <PaymentsManage PaymentsManage={currentpayment} deletePayment={this.deletePayment} key={currentpayment._id} />;
        })
      }
    
      render() {
        return (
          <div className="PaymentsList"><br/><br/><br/>
           <div className="searchButton">
            <button className="searchPaymentsBtn"><Link className="tosearchPaymentsPage" to="/searchPayments" >Search Payments</Link></button></div><br/><br/>
            
            <h2 className="AddPaymentsTitle">Payments</h2><br></br><br></br>
            <div className='container'  id="PaymentsListForm">
            <table id="table"  className='container'>
            
            <tr>
                  <th>Document No</th>
                  <th>Invoice No</th>
                  <th>Name</th>
                  <th>Payment Detais</th>
                  <th>date</th>
                  <th>Total Amount</th>
                  <th>Actions</th>
            </tr>
            
          
          <tbody>
            {this.Paymentlist()}
            </tbody>
        </table><br/> <br /><br /><br />
      
        <div className="form-btn">
              <button className="btn btn-primary" id="ba3"><Link className="toPaymentsReportPage" to="/PaymentsReport" >GENERATE REPORT</Link></button><br/><br/>
          </div>
        </div>
        <br /><br /><br />
        </div>
       

    )
  }
}