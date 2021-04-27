import React from 'react';
import style from '../../../styles/Card.module.css';

const Card = ({text, icon}) => {
    return (
        <div className={style.secure}>
            <div className={style.icon}>
                <div className={style.icon_img}>{icon}</div>
            </div>
            <p> {text} </p>
        </div>
    )
}

export default Card;
