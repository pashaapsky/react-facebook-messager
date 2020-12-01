import React, {forwardRef} from 'react';
import img1 from '../img/img1.png'
import "../scss/msg.scss";

export const Message = forwardRef(({userName, message}) => {
    const isUser = userName === message.userName;

    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <img className="message__img" src={img1} alt=""/>

            <div className="message__content">
                <p className="message__text">{!isUser && `${message.userName ? message.userName : 'unnamed'}:`} {message.message}</p>
                <small className="message__date">{message.timestamp.toDate().toLocaleString()}</small>
            </div>
        </div>
    );
});


