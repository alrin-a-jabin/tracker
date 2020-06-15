// import React, { Fragment, useState } from 'react';
// import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';
// import { setAlert } from '../../actions/alert';
// import { register } from '../../actions/auth';
// import PropTypes from 'prop-types';

// const WorldRegister = ({ setAlert, register, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     infected: '',
//     recovered: '',
//     deaths: ''
//   });

//   const { infected, recovered, deaths } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setAlert();
//     worldregister({  infected, recovered, deaths  });
//     }
//   };

//   // if (isAuthenticated) {
//   //   return <Redirect to="/dashboard" />;
//   // }

//   return (
//     <Fragment>
//       <h1 className="large text-primary">Register</h1>
//       <p className="lead">
//         <i className="fas fa-user" />
//       </p>
//       <form className="form" onSubmit={onSubmit}>
//         <div className="form-group">
//           <input
//             type="number"
//             placeholder="Enetr the infected cases"
//             name="infected"
//             value={infected}
//             onChange={onChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="number"
//             placeholder="Enter the recovered cases"
//             name="recovered"
//             value={recovered}
//             onChange={onChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="number"
//             placeholder="Enter the death cases in the world"
//             name="deaths"
//             value={deaths}
//             onChange={onChange}
//           />
//         </div>
//         <input type="submit" className="btn btn-primary" value="Register" />
//       </form>
 
//     </Fragment>
//   );
// };

// WorldRegister.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   worldregister: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { setAlert, worldregister })(WorldRegister);
