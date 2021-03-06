import React, {useEffect, useState} from 'react';
import {FormControl} from '@material-ui/core';
import '../scss/messenger.scss';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {Message} from './message'
import {db} from "../firebase-db";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';


function Messenger({userName}) {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);  // {id: 123, data: {userName: 'Paul', message: 'hello Bob', timestamp}},

    useEffect(() => {
        db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (input.trim()) {
            db.collection('messages').add({
                userName,
                message: input,
                timestamp: firebase.firestore.Timestamp.fromDate(new Date())
            });

            setInput('');
        }
    };

    return (
        <div className="messenger">
            <form className="messenger__form form">
                <FormControl className="form__control">
                    <InputLabel className="form__label" htmlFor="my-input">Enter a message</InputLabel>

                    <Input
                        className="form__input"
                        id="my-input"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />

                    <IconButton className="form__icon" type="submit" variant="contained" color="secondary" onClick={sendMessage}>
                        <SendIcon />
                    </IconButton>
                </FormControl>
            </form>

            <FlipMove>
                {
                    messages.map(({id, data}) => (
                        <Message key={id} userName={userName} message={data}/>
                    ))
                }
            </FlipMove>
        </div>
    );
}

export default Messenger;