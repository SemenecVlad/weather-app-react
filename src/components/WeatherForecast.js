import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';

class WeatherForecast extends Component {
    componentDidMount() {
        if (! this.props.forecast) {
            this.props.defaultWeatherForecastFetch()
        }
    }

    getFormatedDate = (timestamp) => {
        let date,hours,minutes,seconds,day,month,year,fullDate,fullTime, formatedDate;

        date = new Date(timestamp * 1000);

        hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        minutes = date.getMinutes() + '0';
        seconds = date.getSeconds() + '0';

        day = date.getDate();
        month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        year = date.getFullYear();

        fullDate = day+'.'+month+'.'+year;
        fullTime = hours+':'+minutes;

        formatedDate = fullTime + '-' + fullDate;

        return formatedDate;
    }

    renderList = () => {
        return this.props.forecast.map(item => {
            return (
                <div style={(item.weather.map(desc => desc.description)) =='clear sky' ? {background:'orange'} : {}} className='forecast-item' key={item.dt}>
                    <p className='date'>{this.getFormatedDate(item.dt)}</p>
                    <img src={`http://openweathermap.org/img/w/${item.weather.map(item => item.icon)}.png`} />
                    <p className='temperature'>{item.main.temp} <sup>0</sup>C</p>
                    <p>{item.weather.map(desc => desc.description)}</p>
                </div>
            )
        })
    }


    render() {
        
        return (
            <div className="weather-forecast">
                <h1 style={{width: '100%'}}>Weather forecast for 5 days</h1>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const forecast = _.map(state.main.forecast, (val, uid) => {
        return { ...val, uid };
    });
    
    return { forecast };
}

export default connect(mapStateToProps, actions)(WeatherForecast);