import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
        color: "red"
    };
    return (
        <div className='mt-4 mb-6 text-3xl font-bold text-blue-600'>
                <NavLink className='pr-4'
                to="/home"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined}>Home</NavLink>

                <NavLink className='pr-4'
                    to="/friends"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined}>Friends</NavLink>

                <NavLink to="/about">
                    {({ isActive }) => (<span
                        style={
                            isActive ? activeStyle : undefined
                        }>About</span>)}</NavLink>
         
        </div>

    );
};

export default Header;