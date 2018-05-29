import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import WeatherForecast from './WeatherForecast';

class WeatherContainer extends Component {
    render() {
        const { error, city, forecast } = this.props;
        return (
            <div style={{width: '85%'}}>
                <SearchBar />
                { (typeof error == 'object' || forecast === undefined || city.cod === '404') ? 
                    <div>Sorry, city not found</div> : 
                    (<div className='weather-container'>
                        <WeatherCard />
                        <WeatherForecast />
                    </div>)
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    city: state.main.city,
    error: state.main.error,
    forecast: state.main.forecast
})

export default connect(mapStateToProps,actions)(WeatherContainer);