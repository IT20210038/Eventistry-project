import React, {Component, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './AddEvent.css';

export default class AddEvent extends Component {
  
  constructor(props) {
      super(props);
      
      this.onChangeEventId = this.onChangeEventId.bind(this);
      this.onChangeEventType = this.onChangeEventType.bind(this);
      this.onChangeEventPlace = this.onChangeEventPlace.bind(this);
      this.onChangeNumberOfguests= this.onChangeNumberOfguests.bind(this);
      this.onChangedate = this.onChangedate.bind(this);
      this.onChangeEventFee = this.onChangeEventFee.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
      this.state = {
        EventId:'',
        EventType: '',
        EventPlace: '',
        NumberOfguests: '',
        date: new Date(),
        EventFee:'',
       }
    }
  
    validate = () =>{
      let EventIdError="";
      let NumberOfguestsError="";
      let EventFeeError="";
      
      if(!this.state.EventFee.includes("0")){
        EventFeeError = "EventFee cannot be a character.It must be a number"
      }

      if(!this.state.NumberOfguests.includes("0")){
        NumberOfguestsError = "Number of guests cannot be a character.It must be a number"
      }

      if(!this.state.EventId.includes("E")){
        EventIdError = "Invalid EventID";
      }

      if(EventIdError ||NumberOfguestsError|| EventFeeError){
        this.setState({ EventIdError ,NumberOfguestsError, EventFeeError});
        return false;
      }
      return true;
    };


    onChangeEventId(e) {
      this.setState({
          EventId: e.target.value
      });
    }

    onChangeEventType(e) {
        this.setState({
            EventType: e.target.value
        });
    }

    onChangeEventPlace(e) {
        this.setState({
            EventPlace: e.target.value
        });
    }
  
    onChangeNumberOfguests(e) {
        this.setState({
            NumberOfguests: e.target.value
        });
    }
  
    onChangedate(date) {
        this.setState({
            date: date
        });
    }

    onChangeEventFee(e) {
        this.setState({
            EventFee: e.target.value
        });
    }

    

    onSubmit(e) {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
        console.log(this.state);
      
    
    const EventsManage = {
            EventId: this.state.EventId,
            EventType: this.state.EventType,
            EventPlace: this.state.EventPlace,
            NumberOfguests: this.state.NumberOfguests,
            date: this.state.date,
            EventFee:this.state.EventFee
    }
  
    console.log(EventsManage);

    axios.post('http://localhost:8070/events/add', EventsManage)
        .then(res => console.log(res.data));

    alert("New Event added!");
    window.location = '/manageEvent';
  }}

  addEventDemo = () => {
    this.setState({
      EventId: ""
    });
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
    <div className="AddEventpg"><br/>
      <form onSubmit={this.onSubmit} className="container" id="Addform">
      <h4 className='add'>ADD NEW EVENT</h4> 
      <div className="form-groupEvent" > 
          <label>Event Id: </label>
          <input type="text"
              required
              name="CNo"
              placeholder="Enter event id"
              //errorMessage="Event ID should be 4 characters and shouldn't include any special characters."
              className="form-control"
              value={this.state.EventId}
              onChange={this.onChangeEventId}
              /> 
              
    </div><br/>
    <div style={{fontSize:16, color:"red"}}>{this.state.EventIdError}</div>
      
      <div className="form-groupEvent"> 
          <label>Event Type : <br /> </label>
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
        </div></div><br/>
        <div className="form-groupEvent"> 
          <label>Event Place : </label>
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
        </div><br/>
        <div className="form-groupEvent">
          <label>Number Of Guests: </label>
          <input 
              type="text" 
              className="form-control"
              name="Dname"
              placeholder="Enter Number of guests"
              //errorMessage="It should be only numbers"
              value={this.state.NumberOfguests}
              onChange={this.onChangeNumberOfguests}
          />
          
        </div><br/>
        <div style={{fontSize:16, color:"red"}}>{this.state.NumberOfguestsError}</div>
        <div className="form-groupEvent">
          <label>date: </label>
          <div>
            <DatePicker
              name="dte"
              selected={this.state.date}
              onChange={this.onChangedate}
            />
          </div>
        </div><br/>
        <div className="form-groupEvent"> 
          <label>Event Fee: </label>
          <input  type="text"
              required
              name="dfee"
              className="form-control"
              placeholder="Enter event fee"
              value={this.state.EventFee}
              onChange={this.onChangeEventFee}
              />
             
        </div><br/>
        <div style={{fontSize:16, color:"red"}}>{this.state.EventFeeError}</div>
       
        <div className="form-groupEvent">
        <div class="col text-center">
          <input type="submit" value="ADD EVENT" className="btn btn-primary" id="b1" />
        </div>
        <button onClick={this.addEventDemo} className="btn btn-primary" id="k1">RESET</button><br/><br/>
        </div><br/>
       
      </form>
    </div>
       )
    }
  }