import {
    FETCH_WEATHER,
    FETCH_FORECAST_WEATHER,
    SEARCH_CITY_WEATHER_SUCCESS,
    SEARCH_CITY_FORECAST_SUCCESS,
    REQUEST_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    city: '',
    forecast: '',
    error: ''
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return {...state, city: action.payload, error: '' }
        case FETCH_FORECAST_WEATHER:
            return {...state, forecast: action.payload, error: ''}
        case SEARCH_CITY_WEATHER_SUCCESS:
            return {...state, city: action.payload, error: ''}
        case SEARCH_CITY_FORECAST_SUCCESS:
            return {...state, forecast: action.payload, error: ''}
        case REQUEST_ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}