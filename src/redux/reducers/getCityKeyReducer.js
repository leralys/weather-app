import {
    CHANGE_SEARCH_TEXT,
    REQUEST_CITY_KEY_PENDING,
    REQUEST_CITY_KEY_SUCCESS,
    REQUEST_CITY_KEY_ERROR
} from '../constants';

const initState = {
    searchText: '',
    city: 'Tel Aviv',
    country: 'IL',
    cityKey: 215854,
    loading: false,
    error: ''
}

export const getCityKeyReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            }
        case REQUEST_CITY_KEY_PENDING:
            return {
                ...state,
                searchText: '',
                loading: true,
                cityKey: -1
            }
        case REQUEST_CITY_KEY_SUCCESS:
            return {
                ...state,
                loading: false,
                cityKey: action.payload.Key,
                city: action.payload.LocalizedName,
                country: action.payload.Country.ID,
                error: ''
            }
        case REQUEST_CITY_KEY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}