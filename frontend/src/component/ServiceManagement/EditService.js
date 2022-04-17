import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import './EditService.css';

export default class EditService extends Component {
    constructor(props) {
      super(props);

      this.onChangename = this.onChangename.bind(this);
      this.onChangetype = this.onChangetype.bind(this);
      this.onChangephoneno = this.onChangephoneno.bind(this);
      this.onChangefee = this.onChangefee.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
      this.state = {
        name: '',
        type: '',
        phoneno: '',
        fee:'',
      }
    }
  
    componentDidMount() {
        axios.get('http://localhost:8070/services/get/' + this.props.match.params.id)
          .then(response => {
            this.setState({
              name: response.data.name,
              type: response.data.type,
              phoneno: response.data.phoneno,
              fee: response.data.fee,
            })
          })
          .catch(function (error) {
            console.log(error);
          })
      }

      onChangename(e) {
        this.setState({
            name: e.target.value
        })
    }

      onChangetype(e) {
          this.setState({
              type: e.target.value
          })
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
    
    axios.post('http://localhost:8070/services/update/' + this.props.match.params.id, ServicesManage)
    .then(res => console.log(res.data));

alert("Service Updated!");
window.location = '/viewService';
}

editServiceDemo = () => {
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
    <div className="EditService"><br/>
      <form onSubmit={this.onSubmit} className="container" id="Editform">
      <h4>UPDATE SERVICE</h4>
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
          <label>Service Type: </label>
          <select className="serviceMan" value={this.state.type}
                    onChange={this.onChangeEtype}>
                    <option selected disabled value="">Select</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Business party">Business party</option>
          </select>
        </div><br/>
       
        <div className="form-group">
          <label>Contact Number: </label>
          <input 
              type="number" 
              required
              className="form-control"
              name="Dnumbere"
              placeholder="Enter Contact Number "
              value={this.state.phoneno}
              onChange={this.onChangephoneno}
          />
          </div><br/>
    
        <div className="form-group"> 
          <label>Service Fee: </label>
          <input  type="number"
              required
              name="dfee"
              className="form-control"
              placeholder="Enter Service Fee"
              value={this.state.fee}
              onChange={this.onChangefee}
              />
        </div><br/>

        <div className="form-group">
        <div class="col text-center">
          <input type="submit" value="Update Service" className="btn btn-primary" id="bkl2" />
          </div>
          <button onClick={this.editServiceDemo} className="btn btn-primary" id="u1">RESET</button><br/><br/>
        </div><br/>
       
      </form>
    </div>
       )
    }
  }
  