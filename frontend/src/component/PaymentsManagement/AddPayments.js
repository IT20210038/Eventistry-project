import React, {Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './AddPayments.css';

export default class AddPayments extends Component {
    constructor(props) {
      super(props);
      
      this.onChangeDocumentNo = this.onChangeDocumentNo.bind(this);
      this.onChangeInvoiceNo = this.onChangeInvoiceNo.bind(this);
      this.onChangeBilltoName = this.onChangeBilltoName.bind(this);
      this.onChangePaymentDetails= this.onChangePaymentDetails.bind(this);
      this.onChangedate = this.onChangedate.bind(this);
      this.onChangeTotalAmount = this.onChangeTotalAmount.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
      this.state = {
        DocumentNo:'',
        InvoiceNo: '',
        BilltoName: '',
        PaymentDetails: '',
        date: new Date(),
        TotalAmount:''
      }
    }
  
    onChangeDocumentNo(e) {
      this.setState({
          DocumentNo: e.target.value
      });
    }

    onChangeInvoiceNo(e) {
        this.setState({
            InvoiceNo: e.target.value
        });
    }

    onChangeBilltoName(e) {
        this.setState({
            BilltoName: e.target.value
        });
    }
  
    onChangePaymentDetails(e) {
        this.setState({
            PaymentDetails: e.target.value
        });
    }
  
    onChangedate(date) {
        this.setState({
            date: date
        });
    }

    onChangeTotalAmount(e) {
        this.setState({
            TotalAmount: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
    
    const PaymentsManage = {
            DocumentNo: this.state.DocumentNo,
            InvoiceNo: this.state.InvoiceNo,
            BilltoName: this.state.BilltoName,
            PaymentDetails: this.state.PaymentDetails,
            date: this.state.date,
            TotalAmount:this.state.TotalAmount
    }
  
    console.log(PaymentsManage);

    axios.post('http://localhost:8070/payments/add', PaymentsManage)
        .then(res => console.log(res.data));

    alert("New Payment added!");
    window.location = '/viewPayments';
  }

  addPaymentDemo = () => {
    this.setState({
      DocumentNo: ""
    });
    this.setState({
      InvoiceNo: ""
    });
    this.setState({
      BilltoName: ""
    });
    this.setState({
      PaymentDetails: ""
    });
    this.setState({
      date: ""
    });
    this.setState({
      TotalAmount: ""
    });
  }

  render() {
    return (
    <div className="Addpaymentpg"><br/>
      <form onSubmit={this.onSubmit} className="container" id="Addform">
      <h4>Payments Add</h4> 
      <div className="form-group" > 
          <label>Document No: </label>
          <input type="text"
              required
              name="CNo"
              placeholder="Document Number"
              className="form-control"
              value={this.state.DocumentNo}
              onChange={this.onChangeDocumentNo}
              /> 
    </div><br/>
      <div className="form-group"> 
          <label>Invoice No: </label>
          <input type="text"
              required
              name="pName"
              placeholder="Invoice Number"
              className="form-control"
              value={this.state.InvoiceNo}
              onChange={this.onChangeInvoiceNo}
              />
        </div><br/>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              name="EventP"
              placeholder="Name"
              className="form-control"
              value={this.state.BilltoName}
              onChange={this.onChangeBilltoName}
              />
        </div><br/>
        <div className="form-group">
          <label>Payment Details: </label>
          <input 
              type="text" 
              className="form-control"
              name="Dname"
              placeholder="Payment Details"
              value={this.state.PaymentDetails}
              onChange={this.onChangePaymentDetails}
          />
        </div><br/>
        <div className="form-group">
          <label>date: </label>
          <div>
            <DatePicker
              name="dte"
              selected={this.state.date}
              onChange={this.onChangedate}
            />
          </div>
        </div><br/>
        <div className="form-group"> 
          <label>Total Amount: </label>
          <input  type="text"
              required
              name="dfee"
              className="form-control"
              placeholder="Total Amount"
              value={this.state.TotalAmount}
              onChange={this.onChangeTotalAmount}
              />
        </div><br/>

        <div className="form-group">
        <div class="col text-center">
          <input type="submit" value="ADD Event" className="btn btn-primary" id="b1" />
          </div>
          <button onClick={this.addPaymentDemo} className="btn btn-primary" id="Q1">RESET</button><br/><br/>
        </div><br/>
       
      </form>
    </div>
       )
    }
  }
  