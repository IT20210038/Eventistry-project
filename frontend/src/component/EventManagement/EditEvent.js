import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './EditEvent.css';

export default class EditEvent extends Component {
    constructor(props) {
      super(props);
      
      this.onChangeEventType = this.onChangeEventType.bind(this);
      this.onChangeEventPlace = this.onChangeEventPlace.bind(this);
      this.onChangeNumberOfguests= this.onChangeNumberOfguests.bind(this);
      this.onChangedate = this.onChangedate.bind(this);
      this.onChangeEventFee = this.onChangeEventFee.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
      this.state = {
        EventType: '',
        EventPlace: '',
        NumberOfguests: '',
        date: new Date(),
        EventFee:'',
      }
    }
  
    componentDidMount() {
        axios.get('http://localhost:8070/events/get/' + this.props.match.params.id)
          .then(response => {
            this.setState({
              EventType: response.data.EventType,
              EventPlace: response.data.EventPlace,
              NumberOfguests: response.data.NumberOfguests,
              date: new Date(response.data.date),
              EventFee: response.data.EventFee,
            })
          })
          .catch(function (error) {
            console.log(error);
          })
      }

      onChangeEventType(e) {
          this.setState({
              EventType: e.target.value
          })
      }

      onChangeEventPlace(e) {
        this.setState({
            EventPlace: e.target.value
        })
    }
  
    onChangeNumberOfguests(e) {
        this.setState({
            NumberOfguests: e.target.value
        })
    }
  
    onChangedate(date) {
        this.setState({
            date: date
        })
    }

    onChangeEventFee(e) {
        this.setState({
            EventFee: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
    const EventsManage = {
            EventType: this.state.EventType,
            EventPlace: this.state.EventPlace,
            NumberOfguests: this.state.NumberOfguests,
            date: this.state.date,
            EventFee:this.state.EventFee
    }
  
    console.log(EventsManage);
    
    axios.post('http://localhost:8070/events/update/' + this.props.match.params.id, EventsManage)
    .then(res => console.log(res.data));

alert("Event Updated!");
window.location = '/viewEvent';
}

editEventDemo = () => {
  this.setState({
    EventType: ""
  });
  this.setState({
    EventPlace: ""
  });
  this.setState({
    NumberOfguests: ""
  });
  this.setState({
    EventFee: ""
  });
}

render() {
    return (
    <div className="EditEvent"><br/>
      <form onSubmit={this.onSubmit} className="container" id="Editform">
      <h4 className='upform'>UPDATE EVENT</h4> 
      <div className="form-groupEvent"> 

          <label>Event Type:</label>
          <div class="dropdown-content">
          <select className="eventMan" value={this.state.EventType}
           onChange={this.onChangeEventType}>
                    <option selected disabled value="">Select</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Business party">Business party</option>
          </select>
          </div><br/>
        
          <label>Event Place: </label>
          <select className="eventMain" value={this.state.EventPlace}
                    onChange={this.onChangeEventPlace}>
                    <option selected disabled value="">Select</option>
                    <option value="Shangrila,Colombo">Shangrila,Colombo</option>
                    <option value="Kingsbury,Colombo">Kingsbury,Colombo</option>
                    <option value="Avenra Garden,Negombo">Avenra Garden,Negombo</option>
                    <option value="Hilton,Colombo">Hilton,Colombo</option>
                    <option value="Amari Galle,Galle">Amari Galle,Galle</option>
                    <option value="Petti-Petti,Mirissa">Petti-Petti,Mirissa</option>
                    <option value="Araliya Hotel,Unawatuna">Araliya Hotel,Unawatuna</option>
                    <option value="98-acress Resort">98-acress Resort</option>
                    <option value="Marriot,Weligama">Marriot,Weligama</option>
          </select>
        <br/>
        
          <label>Number Of Guests: </label>
          <input 
              type="text" 
              className="form-control"
              name="Dname"
              placeholder="Enter Number of guests"
              value={this.state.NumberOfguests}
              onChange={this.onChangeNumberOfguests}
          />
        <br/>
        
          <label>date: </label>
          <div>
            <DatePicker
              name="dte"
              selected={this.state.date}
              onChange={this.onChangedate}
            />
          </div>
       <br/>
         
          <label>Event Fee: </label>
          <input  type="text"
              required
              name="dfee"
              className="form-control"
              placeholder="Enter event fee"
              value={this.state.EventFee}
              onChange={this.onChangeEventFee}
              />
        <br/>

        
        <div class="col text-center">
          <input type="submit" value="UPDATE EVENT" className="btn btn-primary" id="ba2" />
          </div>
          <button onClick={this.editEventDemo} className="btn btn-primary" id="k2">RESET</button><br/><br/>
        <br/>
       </div>
      </form>
    </div>
       )
    }
  }
  