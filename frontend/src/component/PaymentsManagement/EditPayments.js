import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './EditPayments.css';

export default class EditPayments extends Component {
    constructor(props) {
      super(props);
      
      this.onChangeInvoiceNo = this.onChangeInvoiceNo.bind(this);
      this.onChangeBilltoName= this.onChangeBilltoName.bind(this);
      this.onChangePayemntDetails = this.onChangePayemntDetails.bind(this);
      this.onChangedate = this.onChangedate.bind(this);
      this.onChangeTotalAmount = this.onChangeTotalAmount.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
      this.state = {
        InvoiceNo: '',
        BilltoName: '',
        PaymentDetails: '',
        date: new Date(),
        TotalAmount:'',
      }
    }
  
    componentDidMount() {
        axios.get('http://localhost:8070/payments/get/' + this.props.match.params.id)
          .then(response => {
            this.setState({
              InvoiceNo: response.data.InvoiceNo,
              BilltoName: response.data.BilltoName,
              PaymentDetails: response.data.PaymentDetails,
              date: new Date(response.data.date),
              TotalAmount: response.data.TotalAmount,
            })
          })
          .catch(function (error) {
            console.log(error);
          })
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
  
    onChangePayemntDetails(e) {
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
            InvoiceNo: this.state.InvoiceNo,
            BilltoName: this.state.BilltoName,
            PaymentDetails: this.state.PaymentDetails,
            date: this.state.date,
            TotalAmount:this.state.TotalAmount
    }
  
    console.log(PaymentsManage);

    axios.post('http://localhost:8070/payments/update/' + this.props.match.params.id, PaymentsManage)
    .then(res => console.log(res.data));

alert(" Updated!");
window.location = '/viewPayments';
}

editPaymentDemo = () => {
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
    <div className="UpdatePayments"><br/>
      <form onSubmit={this.onSubmit} className="container" id="Editform">
      <h4>UPDATE EVENT</h4> 
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
              placeholder="Payments Details"
              value={this.state.PaymentsDetails}
              onChange={this.onChangePayemntsDetails}
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
          <input type="submit" value="Update Payments" className="btn btn-primary" id="bk2" />
          </div>
          <button onClick={this.editPaymentDemo} className="btn btn-primary" id="Q2">RESET</button><br/><br/>
        </div><br/>
       
      </form>
    </div>
       )
    }
  }
  