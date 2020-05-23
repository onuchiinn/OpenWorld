import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div>
      <div className={s.avatar}>
        <img src="https://st2.depositphotos.com/1037168/5190/i/450/depositphotos_51904861-stock-photo-beautiful-above-and-underwater-landscape.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
  </div>
    </div>
  )
}


export default ProfileInfo;