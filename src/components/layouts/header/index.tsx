import React, { FC } from 'react';
import './header.css'
import Logo from './logo/Logo';
import SearchBar from './searchBar/SearchBar';
import Nav from './nav/Nav';

const Header = () => {
    return (
       <header id="header" className="header fixed-top d-flex align-items-center">
            {/* {logo} */}
            <Logo />
            {/* {search bar} */}
            <SearchBar />
            {/* {nav} */}
            <Nav />
       </header>
    );
};

export default Header;