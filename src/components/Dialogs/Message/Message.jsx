import React from 'react'
import s from './../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}
        <textarea className={s.inputText}></textarea>
        <button className={s.submitText}>:)</button>
        </div>
    )
}


export default Message;