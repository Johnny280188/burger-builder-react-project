import React, { Component } from 'react';
import Aux from '../../hoc/CompAux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        sideDrawerOpen: false
    }

    closeSideDrawer = () => {
        this.setState({sideDrawerOpen: false});
    }

    openSideDrawer = () => {
        this.setState({sideDrawerOpen: true});
    }

    render(){
        return (
            <Aux>
                <Toolbar menuClick={this.openSideDrawer} />
                <div className={classes.SideDrawer}>
                    <SideDrawer closeSideDrawer={this.closeSideDrawer} isOpen={this.state.sideDrawerOpen} />
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;