import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

// компонента только рисует. А данные и колбэки передаём из вне. Состояние не меняет, обращается к стэйту и 
// только потом после смены значений в стейте перерисовывается в компоненте.



const MyPosts = (props) => {

  let postElements = props.posts.map ( p => <Post message={p.message} count={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };
  

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text});
    
  }

  return <div className={s.postsBlock}>
    <h3>My Posts</h3>
    <div>
      <div>
        {/* onChange это обработчик. Срабатывает всякий раз, когда пытаемся изменить содержимое textarea */}
        <textarea placeholder="Всем привет!" className={s.textArea} onChange={onPostChange} ref={newPostElement}
        value={props.newPostText}/>
      </div>
      <div>
        <button onClick={ addPost }>Add post</button>
        </div>
    </div>
    <div className={s.post}>
      {postElements}
    </div>
  </div>
}
export default MyPosts;