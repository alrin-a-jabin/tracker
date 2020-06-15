import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    infected,
    recovered,
    deaths,
    date,
    user: { name }
  }
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <h1 className='large'>Covid-19 Affected Status India</h1>
      <h1 className='large'>Total Infected  {infected}</h1>
      <h1 className='large'>Total Recovered {recovered} </h1>
      <h1 className='large'>Total Deaths           {deaths} </h1>
  {/* <h3>Total Infected people <h1>{infected}</h1></h3>
      <p className='lead'>
        {infected} {recovered && <span> at {recovered}</span>}
      </p>
      <p>{deaths && <span>{deaths}</span>}</p> */}
      <div className='icons my-1'>
        {date && (
          <p>
            last update @ {date}</p>
          // <a href={date} target='_blank' rel='noopener noreferrer'>
          //   <i className='fas fa-globe fa-2x' />
          // </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
