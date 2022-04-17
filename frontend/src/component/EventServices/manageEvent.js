import React from 'react';
import { NavLink } from 'react-router-dom';
import './manageEvent.css';
import viewapp from '../../Assets/Images/viewapp.jpg'
import Addap from '../../Assets/Images/Addap.jpg';
import ChReport from '../../Assets/Images/ChReport.png';
import { ManageEventContainer, ManageEventH1, ManageEventWrapper, ManageEventCard, ManageEventIcon, ManageEventH2 } from './manageEventElement'


function ManageEvent() {
    return (
        <div className="manageEvent">
            <h3 className="mangApp">EVENT MANAGEMENT</h3>

            <ManageEventContainer id='manageEvent'>
                <ManageEventH1>Select task to continue</ManageEventH1>
                <ManageEventWrapper>
                    <ManageEventCard>
                        <ManageEventH2>ADD NEW EVENT</ManageEventH2>
                        <ManageEventIcon src={Addap} />
                        <h5><NavLink to='/addEvent'>Continue</NavLink></h5>

                    </ManageEventCard>
                    <ManageEventCard>
                        <ManageEventH2>VIEW EVENTS</ManageEventH2>
                        <ManageEventIcon src={viewapp} />
                        <h5><NavLink to='/viewEvent'>Continue</NavLink></h5>

                    </ManageEventCard>

                    <ManageEventCard>
                        <ManageEventH2>GENERATE REPORT</ManageEventH2>
                        <ManageEventIcon src={ChReport} />
                        <h5><NavLink to='/EventReport'>Continue</NavLink></h5>

                    </ManageEventCard>


                </ManageEventWrapper>
            </ManageEventContainer><br/><br/><br/>


        </div>
    );
}

export default ManageEvent;