import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import './viewService.css';

const ServicesManage = props => (
    <tr>
      <td>{props.ServicesManage.name}</td>
      <td>{props.ServicesManage.type}</td>
      <td>{props.ServicesManage.phoneno}</td>
      <td>{props.ServicesManage.fee}</td>
      <td>
      </td>
    </tr>
  )

export default class pdfGenerator extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { ServicesManage: [] };
    }

    
    
    componentDidMount() {
        axios.get('http://localhost:8070/services/')
          .then(response => {
            this.setState({ ServicesManage: response.data })
          })
          .catch(error => {
            console.log(error);
          })
      }

    
      Servicelist() {
        return this.state.ServicesManage.map(currentservice => {
          return <ServicesManage ServicesManage={currentservice} deleteService={this.deleteService} key={currentservice._id} />;
        })
      }

    jsPDFGenerator = () => {
        var doc = new jsPDF('p', 'pt');
        doc.autoTable({ html: '#serviceDetailsTable' })
        doc.save("ServiceReport.pdf");
    }

    render() {
        return (
            <div className="viewServicepg"><br/>
            <div className='container'>
             <h3 className="ServiceDetails">Services Details</h3><br />
             <table className="table"  id="serviceDetailsTable" >
               <thead className="thead-light">
                        <tr>
                        <th>Name</th>
                        <th>EventType</th>
                        <th>ContactNo</th>
                        <th>ServiceFee</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.Servicelist()}
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