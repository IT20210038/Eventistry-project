import React from 'react';
import { NavLink } from 'react-router-dom';
import './manageService.css';
import viewService from '../../Assets/Images/viewService.jpg'
import adservice from '../../Assets/Images/adservice.jpg';
import serviceReport from '../../Assets/Images/serviceReport.png';
import { ManageServiceContainer, ManageServiceH1, ManageServiceWrapper, ManageServiceCard, ManageServiceIcon, ManageServiceH2 } from './manageServiceElement'


function ManageService() {
    return (
        <div className="manageService">
            <h3 className="mangApp">SERVICE MANAGEMENT</h3>

            <ManageServiceContainer id='manageService'>
                <ManageServiceH1>Select task to proceed</ManageServiceH1>
                <ManageServiceWrapper>
                    <ManageServiceCard>
                        <ManageServiceH2>ADD NEW SERVICES</ManageServiceH2>
                        <ManageServiceIcon src={adservice} />
                        <h5><NavLink to='/addService'>ADD SERVICE</NavLink></h5>

                    </ManageServiceCard>
                    <ManageServiceCard>
                        <ManageServiceH2>VIEW SERVICES</ManageServiceH2>
                        <ManageServiceIcon src={viewService} />
                        <h5><NavLink to='/viewService'>VIEW SERVICES</NavLink></h5>

                    </ManageServiceCard>

                    <ManageServiceCard>
                        <ManageServiceH2>GENERATE REPORT</ManageServiceH2>
                        <ManageServiceIcon src={serviceReport} />
                        <h5><NavLink to='/ServiceReport'>GENERATE REPORT</NavLink></h5>

                    </ManageServiceCard>


                </ManageServiceWrapper>
            </ManageServiceContainer>


        </div>
    );
}

export default ManageService;