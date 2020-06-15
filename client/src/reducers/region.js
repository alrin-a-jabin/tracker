import {
    // STATE_INSERTED_SUCCESS,
    // STATES_INSERTED_FAILED ,
    GET_STATELIST,
    GET_STATES_ERROR
} from '../actions/types';

const initialState={
    region:{},
    regions:[],
    loading:true,
    error:{}
}
export default function (state = initialState,action){
    const {type,payload } =action;
    
    switch(type) {
        case GET_STATELIST:
            return {
                ...state,
                regions:payload,
                loading:false
            };
        case GET_STATES_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                profile: null
            };
        
        default:
            return state;

    }
}

