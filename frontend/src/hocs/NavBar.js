import React from 'react';
import logo from "../media/moogee-logo-gee.svg";


const NavBar = () => {
    return (
        <header className='header'>
            <div className="logo">
                <img src={logo} width="30" alt="moogee logo" />
            </div>
            <nav className="navbar">
                <ul className="nav__links">
                    <li className="nav__item"><a href="#">Home</a></li>
                    <li className="nav__item"><a href="#">Sign in</a></li>
                    <li className="nav__item"><a href="#">Sign up</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar