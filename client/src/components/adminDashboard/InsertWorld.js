import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    infected: '',
    recovered: '',
    deaths: ''
  });

  const { infected, recovered,deaths} = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // if (password !== password2) {
    //   setAlert('Passwords do not match', 'danger');
    // } else {
      register({infected, recovered,deaths });
    // }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Insert Form</h1>
      <p className="lead">
        <i className="fas fa-user" /> 
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="number"
            placeholder="Enter covid-19 Infected cases in the world"
            name="infected"
            value={infected}
            onChange={onChange}
          />
        </div>
  
        <div className="form-group">
          <input
            type="number"
            placeholder="Confirm Password"
            name="infected"
            value={infected}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
