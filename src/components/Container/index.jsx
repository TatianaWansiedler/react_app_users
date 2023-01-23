import React from 'react';
import UserCard from '../UserCard';
import s from './style.module.css'

const Container = () => {
    const users = [
        {
            id: 1,
            name: "Leanne Graham",
            image:"https://api.dicebear.com/5.x/adventurer/svg?seed=Zoey",
            profession: "Junior Web Developer",
            posts: 120,
            followers: 47,
            following: 20,
            online: true
        },
        {
            id: 2,
            name: "Ervin Howell",
            image:"https://api.dicebear.com/5.x/adventurer/svg?seed=Trouble",
            profession: "Python Developer",
            posts: 410,
            followers: 375,
            following: 120,
            online: false
        },
        {
            id: 3,
            name: "Terrill Hills",
            image:"https://api.dicebear.com/5.x/adventurer/svg?seed=Gizmo",
            profession: "Full Stack Developer",
            posts: 234,
            followers: 1248,
            following: 10,
            online: false
        },
        {
            id: 4,
            name: "Coralie Boyle",
            image:"https://api.dicebear.com/5.x/adventurer/svg?seed=Shadow",
            profession: "UX Design",
            posts: 897,
            followers: 3467,
            following: 112,
            online: false
        },
        {
            id: 5,
            name: "Griffin Braun",
            image:"https://api.dicebear.com/5.x/adventurer/svg?seed=Missy",
            profession: "Android Developer",
            posts: 23,
            followers: 135,
            following: 170,
            online: true
        },
        {
            id: 6,
            name: "Angelica Baumbach",
            image:"https://api.dicebear.com/5.x/adventurer/svg?seed=Sammy",
            profession: "Machine Learning Engineer",
            posts: 117,
            followers: 387,
            following: 17,
            online: false
        }
    ]

    return (
        <div className={s.container}>
            {
                users.map(user=><UserCard key={user.id} {...user}/>)
            }
            
        </div>
    );
};

export default Container;