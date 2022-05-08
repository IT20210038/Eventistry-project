import React, {Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import './AddService.css';

export default class AddService extends Component {
    constructor(props) {
      super(props);
      
      this.onChangename = this.onChangename.bind(this);
      this.onChangetype = this.onChangetype.bind(this);
      this.onChangephoneno = this.onChangephoneno.bind(this);
      this.onChangefee = this.onChangefee.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
      this.state = {
        name:'',
        type: '',
        phoneno: '',
        fee:''
      }
    }
  
    onChangename(e) {
      this.setState({
          name: e.target.value
      });
    }

    onChangetype(e) {
        this.setState({
            type: e.target.value
        });
    }

    onChangephoneno(e) {
        this.setState({
          phoneno: e.target.value
        });
    }

    onChangefee(e) {
        this.setState({
            fee: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
    
    const ServicesManage = {
            name: this.state.name,
            type: this.state.type,
            phoneno: this.state.phoneno,
            fee:this.state.fee
    }
  
    console.log(ServicesManage);

    axios.post('http://localhost:8070/services/add', ServicesManage)
        .then(res => console.log(res.data));

    alert("New Service added!");
    window.location = '/';
  }

  addServiceDemo = () => {
    this.setState({
      name: ""
    });
    this.setState({
      type: ""
    });
    this.setState({
      phoneno: ""
    });
    this.setState({
      fee: ""
    });
  }

  render() {
    return (
    <div className="AddServicepg"><br/>
      <form onSubmit={this.onSubmit} className="container" id="Addform">
      <h4>ADD NEW SERVICE</h4> 
      <div className="form-group" > 
          <label>NAME: </label>
          <input type="text"
              required
              name="CNo"
              placeholder="Enter Name"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
              /> 
    </div><br/>
      <div className="form-group"> 
          <label>Service Type : <br /> </label>
          <select className="serviceMan" value={this.state.type}
                    onChange={this.onChangetype}>
                    <option selected disabled value="">Select</option>
                    <option value="Transport">Transport</option>
                    <option value="Photography">Photography</option>
                    <option value="Locations Planning">Locations Planning</option>
                    <option value="Event Packages">Event Packages</option>
          </select>
        </div><br/>
        <div className="form-group">
          <label>Contact Number: </label>
          <input 
              type="text" 
              required
              className="form-control"
              name="Dnumbere"
              placeholder="Enter Contact Number "
              value={this.state.phoneno}
              pattern="[0-9]*"
              maxLength="10"
              minLength="10"
              onChange={this.onChangephoneno}
          />
          </div><br/>
        <div className="form-group"> 
          <label>Service Fee: </label>
          <input 
             type="text"
              required
              name="dfee"
              className="form-control"
              placeholder="Enter Service fee"
              value={this.state.fee}
              onChange={this.onChangefee}
              />
        </div><br/>

        <div className="form-group">
        <div class="col text-center">
          <input type="submit" value="ADD SERVICE" className="btn btn-primary" id="bk1" /> 
          </div>
          <button onClick={this.addServiceDemo} className="btn btn-primary" id="u1">RESET</button><br/><br/>
        </div><br/>

      </form>
    </div>
       )
    }
  }
  
