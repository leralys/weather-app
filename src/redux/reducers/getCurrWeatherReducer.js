import {
    REQ_CURRENT_W_PENDING,
    REQ_CURRENT_W_SUCCESS,
    REQ_CURRENT_W_ERROR
} from '../constants';

const initState = {
    loading: false,
    data: undefined,
    error: ''
}

export const getCurrWeatherReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case REQ_CURRENT_W_PENDING:
            return {
                ...state,
                loading: true
            }
        case REQ_CURRENT_W_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case REQ_CURRENT_W_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}