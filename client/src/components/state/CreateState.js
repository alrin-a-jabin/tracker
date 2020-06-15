import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { createstate } from '../../actions/state';
import PropTypes from 'prop-types';

const CreateState = ({ setAlert, createstate }) => {
  const [formData, setFormData] = useState({
    stateName: '',
    infected: '',
    recovered: '',
    deaths: ''
  });

  const { stateName, infected, recovered, deaths } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
      // setAlert();
      createstate({ stateName, infected, recovered, deaths });
    //  return <Redirect to="/dashboard" />
    //   console.log(createstate({ stateName, infected, recovered, deaths }))
  };



  return (
    <Fragment>
      <h1 className="large text-primary">Create the state data</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create the state profile
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter the stateName "
            name="stateName"
            value={stateName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Enter the infected cases"
            name="infected"
            value={infected}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Enter the recovered cases"
            name="recovered"
            value={recovered}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Enter the deaths cases"
            name="deaths"
            value={deaths}
            onChange={onChange}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

CreateState.propTypes = {
  setAlert: PropTypes.func.isRequired,
  createstate: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, createstate })(CreateState);
