import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.meme-arsenal.com/memes/862d2a9a2265a4524f51655a5f5dacb5.jpg"></img>
      {props.message}
      <div>
        {props.count }
        <span> likes</span>
      </div>
    </div>
  )

}
export default Post;