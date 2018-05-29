import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
    return (
        <div className='welcome-screen'>
            <h1>Welcome to Weather App</h1>
            <p>Here you can find a weather in any city you want! From 200 000 cities available in our base. Enjoy!</p>
            <Link to='/weather' className='button'>Let's start NOW</Link>
        </div>
    )
}

export default Welcome;