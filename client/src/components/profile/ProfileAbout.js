import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    infected,
    // skills,
    user: { name }
  }
}) => (
  <div className='profile-about bg-light p-2'>
    {infected && (
      <Fragment>
        <h2 className='text-primary'>{name.trim().split(' ')[0]}s Infected</h2>
        <p>{infected}</p>
        <div className='line' />
      </Fragment>
    )}
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
