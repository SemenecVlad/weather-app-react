import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Welcome';
import WeatherContainer from './WeatherContainer';

class Main extends Component {
    
    render() {
        return (
            <div className='main-container'>
                <Switch>
                    <Route exact  path='/' component={Welcome} />
                    <Route path='/weather' component={WeatherContainer} />
                </Switch>
            </div>
        )
    }
}

export default Main;