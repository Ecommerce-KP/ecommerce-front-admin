import React from 'react';
import './nav.css';
import NavNotice from './navNotice';
import NavMessage from './navMessage';
import NavAvatar from './navAvatar';

const Nav = () => {
    return (
        <nav className='header-nav ms-auto'>
            <ul className="d-flex align-items-center mb-0">
                <NavNotice/>
                <NavMessage/>
                <NavAvatar/>
            </ul>
        </nav>
    );
};

export default Nav;