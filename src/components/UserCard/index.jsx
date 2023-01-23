import React from 'react';
import Info from '../Info';
import s from './style.module.css'

const UserCard = ({image,name,profession,posts,followers,following,online}) => {
    return (
        <div className={s.card}>
            <div className={s.block}>
                <img src={image} alt="User_image" className={s.image} />
                <span className={ online? s.status : {} }></span>
            </div>
            <div className={s.text}>
                <h2>{name}</h2>
                <p>{profession}</p>
            </div>
            <ul className={s.info}>
                <Info posts={posts} text={'posts'}/>
                <Info posts={followers} text={'followers'}/>
                <Info posts={following} text={'following'}/>
            </ul>
            <div className={s.action}>
                <button className={`${s.button} ${s.button_follow}`}>follow</button>
                <button className={`${s.button} ${s.button_message}`}>message</button>
            </div>
        </div>
        
    );
};

export default UserCard;