import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = props => {
    let navItems = (
        <ul>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
        </ul>
    );
    if (props.isAuthenticated) {
        navItems = (
            <ul>
                <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/logout">Logout</NavLink>
                </li>
            </ul>
        );
    }


    return (
        <header className="main-header">
            <nav>
                {navItems}
            </nav>
        </header>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps, null)(Navigation);