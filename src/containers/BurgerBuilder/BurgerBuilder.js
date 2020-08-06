import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import { INGREDIANTS, INGREDIANT_PRICES } from '../../components/Burger/ingrediants/Ingrediants';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {
    state= {
        ingredients: {
            'meat': 1
        },
        totalPrice: 1.5,
        totalIngrediants: 1,
        checkingOut: false
    }

    applyAction = (type, action) => {
        let currentCount = this.state.ingredients[type] === undefined ? 0 : this.state.ingredients[type];
        let updatedIngreds = {...this.state.ingredients};
        let currentCost = this.state.totalPrice;        
        let currentIngredsCount = this.state.totalIngrediants;
        switch(action){
            case 'add':
                updatedIngreds[type] = ++currentCount;
                currentCost += INGREDIANT_PRICES[type];
                currentIngredsCount++;
                break;
            case 'remove':
                if (currentCount > 0){
                    updatedIngreds[type] = --currentCount;
                    currentCost -= INGREDIANT_PRICES[type];
                    currentIngredsCount--;
                }

                break;
        }

        this.setState({
            ingredients: updatedIngreds,
            totalPrice: currentCost,
            totalIngrediants: currentIngredsCount
        });
    }

    purchaseHandler = () => {
        this.setState({checkingOut: true});
    }

    closeModal = () => {
        this.setState({checkingOut: false});
    }

    orderPlacedHandler = () => {
        alert('Order Placed');
        this.setState({checkingOut: false});
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.checkingOut} closeModal={this.closeModal}><OrderSummary ingredients={this.state.ingredients} placeOrder={this.orderPlacedHandler} cancelOrder={this.closeModal} totalPrice={this.state.totalPrice}/></Modal>
                <Burger ingredients={this.state.ingredients}></Burger>                
                <BuildControls ingreds={this.state.ingredients} applyAction={this.applyAction} price={this.state.totalPrice} count={this.state.totalIngrediants} orderClick={this.purchaseHandler} />
            </Aux>
        );        
    }
}

export default BurgerBuilder;
