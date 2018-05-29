import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class WeatherCard extends Component {

    componentDidMount() {
        if(!this.props.city) {
            this.props.defaultWeatherFetch()
        }
    }
    //Available keys: 'description', 'main', 'id', 'icon'
    getWeatherInfo = (name) => {
        if(name) {
            return this.props.city.weather.map(item => item[name])
        } else {
            return 'Nothing to show'
        }
    }
   
    getFormatedTime = (timestamp) => {
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let fullTime = hours+':'+minutes+':'+seconds;

        return fullTime;
    }

    renderCard = () => {
        const { city } = this.props;
        if (!city) return <div>Nothing to display</div>
        return (
            <Fragment>
                <div className='title-box'>
                    <h1 style={(city.name).length > 13 ? {fontSize: '14px'} : {fontSize: '18px'}}>{city.name}</h1>
                    <img src={`http://www.countryflags.io/${city.sys.country}/shiny/32.png`} />
                </div>
                <div className='weather-thumb'>
                    <img src={`http://openweathermap.org/img/w/${this.getWeatherInfo('icon')}.png`} />
                </div>

                <p className='temperature'>{city.main.temp} <sup>0</sup>C</p>
                <p>Weather: {this.getWeatherInfo('description')}</p>
                
                <p>Pressure now: {city.main.pressure} hpa</p>
                <p>Humidity: {city.main.humidity}%</p>
                <p>Sunrise: {this.getFormatedTime(city.sys.sunrise)} AM</p>
                <p>Sunset: {this.getFormatedTime(city.sys.sunset)} PM</p>
            </Fragment>
        )
    }
    
    render() {        
        return (
            <div className='weather-card'>
            {this.renderCard()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    city: state.main.city
})

export default connect(mapStateToProps, actions)(WeatherCard);