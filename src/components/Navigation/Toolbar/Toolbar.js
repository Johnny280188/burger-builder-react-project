import React from 'react';
import classes from './Toolbar.css';
import NavigationList from '../NavigationItems/NavigationList';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <button onClick={props.menuClick} className={classes.MenuButton}><div></div><div></div><div></div></button>
            <nav className={classes.Desktop}>
                <NavigationList/>
            </nav>
        </header>
    );
}

export default toolbar;