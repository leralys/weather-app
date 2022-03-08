import {
    REQUEST_WEATHER_PENDING,
    REQUEST_WEATHER_SUCCESS,
    REQUEST_WEATHER_ERROR
} from '../constants';
import axios from 'axios';
import { apiKey } from '../../api/api';

const requestForecast = () => async (dispatch, getState) => {
    console.log('requestForecast');
    const cityKey = getState().city.cityKey;
    dispatch({ type: REQUEST_WEATHER_PENDING });
    try {
        const res = await axios.get(`http://localhost:2500/api/five`);
        // const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}`);
        dispatch({
            type: REQUEST_WEATHER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: REQUEST_WEATHER_ERROR,
            payload: console.log(err)
        })
    }
}

export default requestForecast;