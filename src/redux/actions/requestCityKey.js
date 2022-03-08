import {
    REQUEST_CITY_KEY_PENDING,
    REQUEST_CITY_KEY_SUCCESS,
    REQUEST_CITY_KEY_ERROR
} from '../constants';
import axios from 'axios';
import { apiKey } from '../../api/api';
import requestCurrWeather from './requestCurrWeather';
import requestForecast from './requestForecast';

const requestCityKey = text => async (dispatch) => {
    console.log('requestCityKey');
    if (text === '') return;
    console.log(text);
    dispatch({ type: REQUEST_CITY_KEY_PENDING });
    try {
        const res = await axios.get(`http://localhost:2500/api/autocomplete`);
        // const res = await axios.get(`https://dataservice.accuweather.com/locations/v1/autocomplete?q=${text}&apikey=${apiKey}`);
        dispatch({ type: REQUEST_CITY_KEY_SUCCESS, payload: res.data[0] });
        await Promise.all([
            dispatch(requestCurrWeather()),
            dispatch(requestForecast())
        ])
    } catch (err) {
        dispatch({
            type: REQUEST_CITY_KEY_ERROR,
            payload: err
        })
    }
}

export default requestCityKey;