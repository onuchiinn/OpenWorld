import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div>
    <div>
      <img src="https://st2.depositphotos.com/1037168/5190/i/450/depositphotos_51904861-stock-photo-beautiful-above-and-underwater-landscape.jpg"></img>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}
export default Profile;