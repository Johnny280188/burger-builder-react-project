import React from 'react';
import { INGREDIANTS } from '../ingrediants/Ingrediants';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
    const controls = [];
    Object.keys(INGREDIANTS).forEach(function(item){
        if (item !== 'BREAD_TOP' && item !== 'BREAD_BOTTOM') {
            controls.push({ label: INGREDIANTS[item].replace('-', ' ').toUpperCase(), type: INGREDIANTS[item], count: props.ingreds[INGREDIANTS[item]] ? props.ingreds[INGREDIANTS[item]] : 0 });
        }
    });

    return (
        <div className={classes.BuildControls}>
            {controls.map((control) => {
                return <BuildControl label={control.label} type={control.type} key={control.label} count={control.count} applyAction={props.applyAction} />
            })}
            <p>Total: <strong>{props.price.toFixed(2)}</strong></p>
            <button className={classes.OrderButton} disabled={props.count === 0} onClick={props.orderClick}>Place Order</button>
        </div>
    );
};

export default buildControls;
