import { combineReducers } from 'redux';
import { getCityKeyReducer } from './getCityKeyReducer';
import { getCurrWeatherReducer } from './getCurrWeatherReducer';
import { getForecastReducer } from './getForecastReducer';



export default combineReducers({
    city: getCityKeyReducer,
    current: getCurrWeatherReducer,
    forecast: getForecastReducer
});