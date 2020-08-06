import React from 'react';
import NavigationList from '../NavigationItems/NavigationList';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
const sideDrawer = (props) => {
    return (
        <div>
            <nav className={classes.SideDrawer} style={{transform: props.isOpen ? 'translateX(0)' : 'translateX(-100%)'}}>
                <NavigationList/>
            </nav>
            <Backdrop show={props.isOpen} closeModal={props.closeSideDrawer} />
        </div>
    );
}

export default sideDrawer;