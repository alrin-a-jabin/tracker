import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import StateItem from './StateItem';
import { getStateslists } from '../../actions/state';

const Viewstates = ({ getStateslists, region: { regions, loading } }) => {
  useEffect(() => {
    getStateslists();
  }, [getStateslists]);
  // console.log(regions)
  const [search, setSearch] = useState("");
  const [filteredregions, setFilteredregions] = useState([]);

  useEffect(() => {
    setFilteredregions(
      regions.filter(region =>
        region.stateName.toLowerCase().includes(search.toLowerCase())
      )
      )
  }, [search, regions]);
  console.log(filteredregions)

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Listing & Searching </h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' />
          </p>
          <input type="text" placeholder="search" onChange={e => setSearch(e.target.value)}/>
          {/* <table border="1"><tr><td>StateName</td>
          <td>Infeced</td>
          <td>recovered</td>
          <td>deaths</td></tr></table> */}
          <div className='profiles'>
            {/* {regions.length > 0 ? (
              regions.map(region => (
                <StateItem key={region._id} region={region} />
              )) */}
                  {filteredregions.length > 0 ? (
              filteredregions.map(region => (
                <StateItem key={region._id} region={region} />
              ))
            ) : (
              <h4>No states found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Viewstates.propTypes = {
  getStateslists: PropTypes.func.isRequired,
  region: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  region: state.region
});

export default connect(
  mapStateToProps,
  { getStateslists }
)(Viewstates);
