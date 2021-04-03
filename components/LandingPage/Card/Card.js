import React from 'react';
import style from '../../../styles/Card.module.css';

const Card = ({text, icon}) => {
    return (
        <div className={style.secure}>
            <h2> {icon} </h2>
            <p> {text} </p>
        </div>
    )
}

export default Card;
