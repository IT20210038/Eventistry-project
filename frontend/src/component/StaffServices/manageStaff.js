import React from 'react';
import { NavLink } from 'react-router-dom';
import './manageStaff.css';
import addEmployee from '../../Assets/Images/addEmployee.jpg';
import viewEmployee from '../../Assets/Images/viewEmployee.png';
import salaryEmployee from '../../Assets/Images/salaryEmployee.jpg';
import { ManageStaffContainer,  ManageStaffH1,  ManageStaffWrapper, ManageStaffCard,  ManageStaffIcon,  ManageStaffH2 } from './manageStaffElement'


function  ManageStaff() {
    return (
        <div className="manageStaff">
            <h3 className="staffManagement">EMPLOYEE MANAGEMENT</h3>

            <ManageStaffContainer id='managePatient'>
                <ManageStaffH1>Select task to continue</ManageStaffH1><br></br>
                <ManageStaffWrapper>
                    <ManageStaffCard>
                        <ManageStaffH2>REGISTER NEW EMPLOYEE </ManageStaffH2>
                        <ManageStaffIcon src={addEmployee} />
                        <h4><NavLink to='/addEmployee'>Continue</NavLink></h4>

                    </ManageStaffCard>
                    <ManageStaffCard>
                        <ManageStaffH2>VIEW EMPLOYEE DETAILS</ManageStaffH2>
                        <ManageStaffIcon src={viewEmployee} />
                        <h4><NavLink to='/viewEmployee'>Continue</NavLink></h4>

                    </ManageStaffCard>
                    <ManageStaffCard>
                        <ManageStaffH2>CALCULATE EMPLOYEE SALARY</ManageStaffH2>
                        <ManageStaffIcon src={salaryEmployee} />
                        <h4><NavLink to='/calcSalary'>Continue</NavLink></h4>

                    </ManageStaffCard>
                </ManageStaffWrapper>
            </ManageStaffContainer>


        </div>
    );
}

export default ManageStaff;