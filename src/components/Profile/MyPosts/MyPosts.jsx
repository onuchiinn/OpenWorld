import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div>My Posts
       <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <Post message= 'Hi, how are you?' count='15' />
    <Post message= "It's my first post" count='20' />
    <Post />
  </div>
}
export default MyPosts;