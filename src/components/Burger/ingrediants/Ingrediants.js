import React from 'react';
import classes from './Ingrediants.css';

export const ingredientBuilder = (props) => {
    let ingrediant = null;
    switch(props.type){
        case INGREDIANTS.BREAD_BOTTOM:
            ingrediant = <div className={classes.BreadBottom}></div>
            break;
        case INGREDIANTS.BREAD_TOP:
            ingrediant = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
            );
            break;
        case INGREDIANTS.MEAT:
            ingrediant = <div className={classes.Meat}></div>
            break;
        case INGREDIANTS.SALAD:
            ingrediant = <div className={classes.Salad}></div>
            break;
        case INGREDIANTS.MOLARD_BREAST:
            ingrediant = <div className={classes.MolardBreast}></div>
            break;
        case INGREDIANTS.VEGAN_CHEESE:
            ingrediant = <div className={classes.VeganCheese}></div>
            break;    
    }

    return ingrediant;
}

export const INGREDIANTS = {
    BREAD_TOP: 'bread-top',
    VEGAN_CHEESE: 'vegan-cheese',
    SALAD: 'salad',    
    MOLARD_BREAST: 'molard-breast',
    MEAT: 'meat',
    BREAD_BOTTOM: 'bread-bottom'
}

export const INGREDIANT_PRICES = {
    'vegan-cheese': 0.5,
    'salad': 0.2,    
    'molard-breast': 0.8,
    'meat': 1.5
}