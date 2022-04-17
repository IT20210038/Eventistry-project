import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import './viewPayments';

const PaymentsManage = props => (
    <tr>
      <td>{props.PaymentsManage.DocumentNo}</td>
      <td>{props.PaymentsManage.InvoiceNo}</td>
      <td>{props.PaymentsManage.BilltoName}</td>
      <td>{props.PaymentsManage.PaymentDetails}</td>
      <td>{props.PaymentsManage.date.substring(0, 10)}</td>
      <td>{props.PaymentsManage.TotalAmount}</td>
      <td>
      </td>
    </tr>
  )

export default class pdfGenerator extends PureComponent {
    constructor(props) {
        super(props);

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

    
      Paymentlist() {
        return this.state.PaymentsManage.map(currentpayment => {
          return <PaymentsManage PaymentsManage={currentpayment} deletePayment={this.deletePayment} key={currentpayment._id} />;
        })
      }

    jsPDFGenerator = () => {
        var doc = new jsPDF('p', 'pt');
        doc.autoTable({ html: '#paymentsDetailsTable' })
        doc.save("PaymentsReport.pdf");
    }

    render() {
        return (
            <div className="PaymentsList"><br/>
            <div className='container'>
             <h3 className="PaymentsDetails">Payments Details</h3><br />
             <table className="table"  id="paymentsDetailsTable" >
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
                    <tbody>
                    {this.Paymentlist()}
                    </tbody>
                </table>
                <br /><br /><br />
                <div class="col text-center">
                    <button onClick={this.jsPDFGenerator} id="ba3">GENERATE REPORT</button>
                </div>
            </div>
            </div>

        )
    }
}