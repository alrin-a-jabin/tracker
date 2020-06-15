import api from '../utils/api';
import { setAlert } from './alert';
import { 
    STATE_INSERTED_SUCCESS,
    STATES_INSERTED_FAILED ,
    GET_STATELIST,
    GET_STATES_ERROR

} from './types';

export const createstate = ({ stateName, infected, recovered, deaths },history) => async dispatch => {
    const body = JSON.stringify({ stateName, infected, recovered, deaths});
    try {
      const res = await api.post('/state/insert', body);

      dispatch({
        type: STATE_INSERTED_SUCCESS,
        payload: res.data
      });
      dispatch(setAlert('state case created success'));

      console.log(res.data);
      if(res.data){
        history.push('/dashboard')
      }
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: STATES_INSERTED_FAILED
        // payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };


  export const getStateslists = () => async dispatch => {
    // dispatch({ type: CLEAR_PROFILE });
  
    try {
      const res = await api.get('/state/');
  
      dispatch({
        type: GET_STATELIST,
        payload: res.data
      });
      console.log(res.data)

    } catch (err) {
      dispatch({
        type: GET_STATES_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  