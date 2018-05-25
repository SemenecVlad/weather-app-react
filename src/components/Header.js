import React from 'react';
import logo from '../logo.png';

const Header = (props) => {
    return (
        <div className='App-header'>
            <img src={logo} />
            <h1 className='App-title'>Weather App</h1>
        </div>
    )
}

export default Header;