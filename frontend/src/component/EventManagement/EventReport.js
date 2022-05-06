import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import './viewEvent.css';

const EventsManage = props => (
    <tr>
      <td>{props.EventsManage.EventId}</td>
      <td>{props.EventsManage.EventType}</td>
      <td>{props.EventsManage.EventPlace}</td>
      <td>{props.EventsManage.NumberOfguests}</td>
      <td>{props.EventsManage.date.substring(0, 10)}</td>
      <td>{props.EventsManage.EventFee}</td>
      <td>
      </td>
    </tr>
  )

export default class pdfGenerator extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { EventsManage: [] };
    }

    
    
    componentDidMount() {
        axios.get('http://localhost:8070/events/')
          .then(response => {
            this.setState({ EventsManage: response.data })
          })
          .catch(error => {
            console.log(error);
          })
      }

    
      Eventlist() {
        return this.state.EventsManage.map(currentevent => {
          return <EventsManage EventsManage={currentevent} deleteEvent={this.deleteEvent} key={currentevent._id} />;
        })
      }

    jsPDFGenerator = () => {
        var doc = new jsPDF('p', 'pt');
        doc.autoTable({ html: '#eventDetailsTable' })
        doc.save("EventReport.pdf");
    }

    render() {
        return (
            <div className="viewEventpg"><br/>
            <div className='container'>
             <h3 className="EventDetails">Events Details</h3><br />
             <table className="table"  id="eventDetailsTable" >
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
                    <tbody>
                    {this.Eventlist()}
                    </tbody>
                </table>
                <br /><br /><br/><br/>
                <div class="col text-center">
                    <button onClick={this.jsPDFGenerator} id="k3">GENERATE REPORT</button>
                </div>
            </div>
            </div>

        )
    }
}