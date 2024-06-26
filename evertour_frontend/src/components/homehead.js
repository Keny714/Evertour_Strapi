import React, { useState } from 'react';

import '../components/header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        
        <header>
        <img src="evertours.svg" alt="EverTours Logo" className="logo"/>
        <h1>EverTours</h1>
        
        <nav className={`nav ${menuOpen ? 'responsive' : ''}`} id="navMenu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Destination">Destination</a></li>
                <li><a href="/Booking">Booking</a></li>
                <li><a href="/login"><i class="fa fa-user-circle"></i></a></li>
            </ul>
        </nav>  
        <button className="svg" id="hamburgerMenu">
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" width="36px" viewBox="0 0 48 48">
                <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"></path>
            </svg>
        </button>
    </header>
        
    );
};

export default Header;
