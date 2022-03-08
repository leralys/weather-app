import {
    REQUEST_WEATHER_PENDING,
    REQUEST_WEATHER_SUCCESS,
    REQUEST_WEATHER_ERROR,
} from '../constants';

const initState = {
    loading: false,
    data: {},
    error: ''
}

export const getForecastReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case REQUEST_WEATHER_PENDING:
            return {
                ...state,
                searchText: '',
                loading: true
            }
        case REQUEST_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case REQUEST_WEATHER_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return { ...state }
    }
}