import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
        <Link to={"/editEvent/" + props.EventsManage._id}>edit</Link> | <a href="#" id="ba4" onClick={() => { props.deleteEvent(props.EventsManage._id) }}>delete</a>
      </td>
    </tr>
  )
  
  export default class ViewEvent extends Component {
    constructor(props) {
      super(props);
  
      this.deleteEvent = this.deleteEvent.bind(this)
  
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

      deleteEvent(id) {
        axios.delete('http://localhost:8070/events/' + id)
          .then(response => { console.log(response.data) });
    
        alert("Are you sure you want to delete the following event from the system?")
        this.setState({
          EventsManage: this.state.EventsManage.filter(sml => sml._id !== id)
        })
      }

      Eventlist() {
        return this.state.EventsManage.map(currentevent => {
          return <EventsManage EventsManage={currentevent} deleteEvent={this.deleteEvent} key={currentevent._id} />;
        })
      }
    
      render() {
        return (
          <div className="viewEventpg"><br/>
           <div className='container'>
            <button className="searchEventBtn"><Link className="toSearch" to="/searchEvent" >Search Event</Link></button>
            <h4 className="viewapp">Events</h4><br />
            <table className="table"  id="eventDetailsTable" >
              <thead className="thead-light">
                <tr>
                  <th>EventId</th>
                  <th>EventType</th>
                  <th>EventPlace</th>
                  <th>NumberOfguests</th>
                  <th>date</th>
                  <th>EventFee</th>
                  <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.Eventlist()}
            </tbody>
        </table>
        <br /><br /><br /><br/><br/><br/>
        </div>
      </div>

    )
  }
}