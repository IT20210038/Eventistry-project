import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './viewService.css';

const ServicesManage = props => (
    <tr>
      <td>{props.ServicesManage.name}</td>
      <td>{props.ServicesManage.type}</td>
      <td>{props.ServicesManage.phoneno}</td>
      <td>{props.ServicesManage.fee}</td>
      <td>
        <Link  to ={"/editService/" + props.ServicesManage._id}>Update</Link> | <a href="#" id="ba4" onClick={() => { props.deleteService(props.ServicesManage._id) }}>delete</a>
      </td>
    </tr>
  )
  
  export default class ViewService extends Component {
    constructor(props) {
      super(props);
  
      this.deleteService = this.deleteService.bind(this)
  
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

      deleteService(id) {
        axios.delete('http://localhost:8070/services/' + id)
          .then(response => { console.log(response.data) });
    
        alert("Are you sure you want to delete the service?")
        this.setState({
          ServicesManage: this.state.ServicesManage.filter(sml => sml._id !== id)
        })
      }

      Servicelist() {
        return this.state.ServicesManage.map(currentservice => {
          return <ServicesManage ServicesManage={currentservice} deleteService={this.deleteService} key={currentservice._id} />;
        })
      }
    
      render() {
        return (
          <div className="viewServicepg"><br/>
           <div className='container'> 
           <div className="searchBttn">
            <button className="searchServiceBtn" ><Link className="toSearchServicePage" to="/SearchService" >Search</Link></button></div><br /><br />
  
         
            <h2 className="addServiceTitle">Services</h2><br />
            <table className="table"  id="serviceDetailsTable" >
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>PhoneNo</th>
                  <th>Fee</th>
                  <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.Servicelist()}
            </tbody>
        </table>
        <br /><br /><br />
        </div>
      </div>

    )
  }
}