import React from 'react';
import s from './style.module.css'

const Info = ({posts,text}) => {
    return (
        <li>
            <span className={s.info}>{posts}</span>
            <span>{text}</span>
        </li>
    );
};

export default Info;