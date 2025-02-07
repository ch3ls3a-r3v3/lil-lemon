import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">Lil Lemon</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
                <button className="book-btn">Book a Table</button>
            </nav>
        </header>
    );
};

export default Header;