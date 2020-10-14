import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="header__container">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <h3>Search</h3>
            </Link>
            <Link to={'/favorites'} style={{ textDecoration: 'none' }}>
                <h3>Favorites</h3>
            </Link>
        </div>
    );
}
 
export default Header;