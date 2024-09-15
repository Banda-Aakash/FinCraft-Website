import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown menu
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <img src='/logo2.png' alt="Logo" className="logo" />
                <div className="menu-icon" onClick={toggleDropdown}>
                    &#9776; {/* Hamburger menu icon */}
                </div>
                <ul className={`navList ${isDropdownOpen ? 'open' : ''}`}>
                    <li className="navItem">
                        <Link to="/" className="navLink">Home</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/about" className="navLink">About Us</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/contact" className="navLink">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
