import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StateItem = ({
    region: {
    // user: { _id, name },
    stateName,
    infected,
    recovered,
    deaths
  }
}) => {
  return (
    <div className='getstate bg-light'>
      {/* <img src={avatar} alt='' className='round-img' /> */}
      <div>
        <h2>{stateName}</h2>
        <p>
          Infected  Cases {infected} <span> Recovered Cases {recovered}   Deaths  {deaths}</span>
        </p>
        {/* <p className='my-1'>{deaths && <span>{deaths}</span>}</p> */}
        {/* <Link to={`/getstate/${_id}`} className='btn btn-primary'>
          View getstate
        </Link> */}
      </div>
      <ul>

      </ul>
    </div>
  );
};

StateItem.propTypes = {
  region: PropTypes.object.isRequired
};

export default StateItem;
