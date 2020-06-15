import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        Update Covid-19 Cases
      </Link>
    </div>
  );
};

export default DashboardActions;
