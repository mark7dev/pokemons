import React from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/pokemon.png';

const Header = () => {
    return ( 
        <div className="header__container">
            <img src={Logo} alt="" className="headerLogo"/>
            <h1 className="title">WHAT POKEMON ARE YOU LOOKING FOR?</h1>
            <div className="menu__container">
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <div className="menu">
                        <i className="fa fa-search icon" aria-hidden="true"></i>
                        <h3>SEARCH</h3>
                    </div>
                </Link>
                <Link to={'/favorites'} style={{ textDecoration: 'none' }}>
                    <div className="menu">
                        <i className="fa fa-heart icon" aria-hidden="true"></i>
                        <h3>FAVORITES</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Header;