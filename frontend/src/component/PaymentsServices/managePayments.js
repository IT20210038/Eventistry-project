import React from 'react';
import { NavLink } from 'react-router-dom';
import './managePayments.css';
import PaymentsIcon from '../../Assets/Images/PaymentsIcon.png'
import Paymentslist from '../../Assets/Images/Paymentslist.jpg';
import ChReport from '../../Assets/Images/ChReport.png';
import { ManagePaymentsContainer, ManagePaymentsH1, ManagePaymentsWrapper, ManagePaymentsCard, ManagePaymentsIcon, ManagePaymentsH2 } from './managePaymentsElement'


function ManagePayments() {
    return (
        <div className="managePayments">
            <h3 className="mangApp">PAYMENTS MANAGEMENT</h3>

            <ManagePaymentsContainer id='managePayments'>
                <ManagePaymentsH1>Select task to continue</ManagePaymentsH1>
                <ManagePaymentsWrapper>
                    <ManagePaymentsCard>
                        <ManagePaymentsH2>ADD NEW PAYMENTS</ManagePaymentsH2>
                        <ManagePaymentsIcon src={Paymentslist} />
                        <h5><NavLink to='/AddPayments'>Continue</NavLink></h5>

                    </ManagePaymentsCard>
                    <ManagePaymentsCard>
                        <ManagePaymentsH2>VIEW PAYMENTS</ManagePaymentsH2>
                        <ManagePaymentsIcon src={PaymentsIcon} />
                        <h5><NavLink to='/viewPayments'>Continue</NavLink></h5>

                    </ManagePaymentsCard>

                    <ManagePaymentsCard>
                        <ManagePaymentsH2>GENERATE REPORT</ManagePaymentsH2>
                        <ManagePaymentsIcon src={ChReport} />
                        <h5><NavLink to='/PaymentsReport'>Continue</NavLink></h5>

                    </ManagePaymentsCard>


                </ManagePaymentsWrapper>
            </ManagePaymentsContainer><br/><br/><br/>


        </div>
    );
}

export default ManagePayments;