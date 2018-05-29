import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='App-header'>
            <img src={logo} />
            <Link to='/' className='App-title'>Weather App</Link>
        </div>
    )
}

export default Header;