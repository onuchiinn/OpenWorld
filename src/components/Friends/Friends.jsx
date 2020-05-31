import React from 'react'
import s from './Friends.module.css';


const Friends = (props) => {
    return (
        <div className={s.friends__list}>
            <h2>Friends</h2>
            <ul>
                <li>
                    <a href="#">Ivanov I.I.</a>
                </li>
                <li>
                <a href="#">Petrov P.P.</a>
                </li>
                <li>
                <a href="#">Sergeev S.S.</a>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
};


export default Friends;