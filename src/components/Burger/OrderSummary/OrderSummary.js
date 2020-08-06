import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(ingred => {
        return props.ingredients[ingred] > 0 ? <li key={ingred}><span style={{ textTransform: 'capitalize' }}>{ingred.replace("-"," ")}</span>: {props.ingredients[ingred]}</li> : null;
    });

    return (
        <Aux>
            <h3>Your Order:</h3>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.cancelOrder}>Cancel</Button>
            <Button btnType="Success" clicked={props.placeOrder}>Continue</Button>  
        </Aux>);
};

export default orderSummary;