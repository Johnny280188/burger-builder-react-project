import React from 'react';
import NavigationItem from './NavigationItem';
import classes from './NavigationList.css';

const navigationItems = () => (
    <ul className={classes.NavigationList}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;