import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddEvent from "./component/EventManagement/AddEvent";
import EditEvent from "./component/EventManagement/EditEvent";
import ViewEvent from "./component/EventManagement/viewEvent";
import EventReport from "./component/EventManagement/EventReport";
import manageEvent from "./component/EventServices/manageEvent";
import SearchEvent from "./component/EventManagement/SearchEvent";
import Navbar from "./component/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/home";

//kasun
import AddPayments from "./component/PaymentsManagement/AddPayments";
import EditPayments from "./component/PaymentsManagement/EditPayments";
import viewPayments from "./component/PaymentsManagement/viewPayments";
import searchPayments from "./component/PaymentsManagement/searchPayments";
import PaymentsReport from "./component/PaymentsManagement/PaymentsReport";

//kaveen
import AddService from "./component/ServiceManagement/AddService";
import EditService from "./component/ServiceManagement/EditService";
import ViewServicet from "./component/ServiceManagement/viewService";
import ServiceReport from "./component/ServiceManagement/ServiceReport";
import manageService from "./component/Services/manageService";

//hashini
import AddEmployee from "./component/StaffManagement/AddEmployee";
import EditEmployee from "./component/StaffManagement/EditEmployee";
import viewEmployee from "./component/StaffManagement/viewEmployee";
import SearchEmployee from "./component/StaffManagement/SearchEmployee";
import manageStaff from "./component/StaffServices/manageStaff";
import employeeReport from './component/StaffManagement/employeeReport';
import CalcSalary from './component/StaffManagement/calcSalary';
import ViewSalary from './component/StaffManagement/viewSalary';
import searchSalary from './component/StaffManagement/searchSalary';


function App() {
  return (
    <Router>
      <div>
      <Navbar/>
     <br/>
        <Route exact path="/" component={Home} />
        <Route path="/addEvent" component={AddEvent} />
        <Route path="/editEvent/:id" component={EditEvent} />
        <Route path="/viewEvent" component={ViewEvent} />
        <Route path='/EventReport' component={EventReport} />
        <Route path='/manageEvent' exact component={manageEvent} />
        <Route path="/SearchEvent" component={SearchEvent} />

        
        <Route path="/addPayments" component={AddPayments} />
        <Route path="/EditPayments/:id" component={EditPayments} />
        <Route path="/viewPayments" component={viewPayments} />
        <Route path="/searchPayments" component={searchPayments} />
        <Route path="/PaymentsReport" component={PaymentsReport} />

        <Route path="/addService" component={AddService} />
        <Route path="/editService/:id" component={EditService} />
        <Route path="/viewService" component={ViewServicet} />
        <Route path='/ServiceReport' component={ServiceReport} />
        <Route path='/manageService' exact component={manageService} />


        <Route path="/manageStaff" component={manageStaff} />
        <Route path="/addEmployee" component={AddEmployee} />
        <Route path="/editEmployee/:id" component={EditEmployee} />
        <Route path="/viewEmployee" component={viewEmployee} />
        <Route path="/SearchEmployee" component={SearchEmployee} />
        <Route path='/employeeReport' component={employeeReport} />
        <Route path='/calcSalary' component={CalcSalary} />
        <Route path='/viewSalary' component={ViewSalary} />
        <Route path='/searchSalary' component={searchSalary} />
      </div>
    </Router>
  );
}

export default App;
