import {
    REQ_CURRENT_W_PENDING,
    REQ_CURRENT_W_SUCCESS,
    REQ_CURRENT_W_ERROR
} from '../constants';
import axios from 'axios';
import { apiKey } from '../../api/api';

const requestCurrWeather = () => async (dispatch, getState) => {
    console.log('requestCurrWeather');
    const cityKey = getState().city.cityKey;
    dispatch({ type: REQ_CURRENT_W_PENDING });
    try {
        // const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
        const res = await axios.get(`http://localhost:2500/api/current`);
        // const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`);
        dispatch({
            type: REQ_CURRENT_W_SUCCESS,
            payload: res.data[0]
        })
    } catch (err) {
        dispatch({
            type: REQ_CURRENT_W_ERROR,
            payload: err
        })
    }
}

export default requestCurrWeather;