import React from "react";
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";

// const setActive = ({isActive}) => isActive ? n.activeLink : '';  //меняем стандартный активный сласс


const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/profile' className={isActive => isActive? n.activeLink : ''}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/dialogs' className={isActive => isActive? n.activeLink : ''}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/news' className={isActive => isActive? n.activeLink : ''}>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/music' className={isActive => isActive? n.activeLink : ''}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/settings' className={isActive => isActive? n.activeLink : ''}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar