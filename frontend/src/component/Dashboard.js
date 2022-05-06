import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './home.css';

const Dashboard = ({ auth: { user } }) => {
	return (
		<div className="form-dashboard">
			<br/><br/><br/>
		<div style={{ marginTop: "5rem", textAlign: "center" }}>
			<h1>Welcome {user && user.name}</h1>
		</div>
		<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
		</div>
	);
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);