import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbar">
            <div className="container">
                <ul className="navList">
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


