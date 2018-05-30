import { 
    FETCH_WEATHER,
    FETCH_FORECAST_WEATHER,
    SEARCH_CITY_WEATHER_SUCCESS,
    SEARCH_CITY_FORECAST_SUCCESS,
    REQUEST_ERROR
} from './types';
import { apiKey } from '../config';

export const error = (err) => ({
    type: REQUEST_ERROR,
    payload: err
});

export const defaultWeatherFetch = () => {

    return dispatch => fetch('http://ip-api.com/json')
        .then(response => response.json())
        .then(data => {
            const { lat, lon } = data;

            console.log(lat,lon);
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => dispatch({
                    type: FETCH_WEATHER,
                    payload: data
                })).then(data => console.log(data))
                .catch(err => console.log('Opps ' + err))
        })
}

export const defaultWeatherForecastFetch = () => {


    return dispatch => fetch('http://ip-api.com/json')
        .then(response => response.json())
        .then(data => {
            const { lat, lon } = data;
            
            console.log(lat,lon);
            fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => dispatch({
                    type: FETCH_FORECAST_WEATHER,
                    payload: data.list
                })).then(data => console.log(data))
                .catch(err => console.log('Opps ' + err))
        })
}

export const searchCity = ({search}) => {
    const encCity = encodeURIComponent(search);
    const url = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

    return dispatch => fetch(`${url}&q=${encCity}`)
    .then(response => response.json())
    .then(data => dispatch({
        type: SEARCH_CITY_WEATHER_SUCCESS,
        payload: data
    }))
    .then(data => console.log(data))
    .catch(err => dispatch(error(err)))
}

export const searchCityForecast = ({search}) => {
    const encCity = encodeURIComponent(search);
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encCity}&appid=${apiKey}&units=metric`;

    return dispatch => fetch(url)
    .then(response => response.json())
    .then(data => dispatch({
        type: SEARCH_CITY_FORECAST_SUCCESS,
        payload: data.list
    }))
    .then(data => console.log(data))
    .catch(err => dispatch(error(err)))
}