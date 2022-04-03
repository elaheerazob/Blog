import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const {pathname} = useLocation();
    // console.log(location);
    return (
        <nav style={pathname.includes('blog') ? {display : 'none'} : {display:'flex'}}>
            <div>
            <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='/'>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='/blog'>Blog</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='/login'>Login</NavLink>
            </div>
            
        </nav>
    );
};

export default Navbar;