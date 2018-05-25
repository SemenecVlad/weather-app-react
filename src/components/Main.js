import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchBar from './SearchBar';
import WeatherContainer from './WeatherContainer';

class Main extends Component {
    
    render() {
        return (
            <div className='main-container'>
                <SearchBar />
                <WeatherContainer />
            </div>
        )
    }
}

export default Main;