import React from 'react';
import { ingredientBuilder as BurgerIngredient, INGREDIANTS } from './ingrediants/Ingrediants';
import Aux from '../../hoc/CompAux';
import classes from './Burger.css';

const burger = (props) => {
    const ingreds = Object.keys(INGREDIANTS).map(type => {
        if (props.ingredients[INGREDIANTS[type]] > 0){
            return [...Array(props.ingredients[INGREDIANTS[type]])].map((_, i) => {
                return <BurgerIngredient type={INGREDIANTS[type]} key={type + i} />
            });
        }
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
             {ingreds}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default burger;