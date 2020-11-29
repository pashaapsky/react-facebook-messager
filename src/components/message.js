import React, {forwardRef} from 'react';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../scss/msg.scss";

export const Message = forwardRef(({userName, message}, ref) => {
    const isUser = userName === message.userName;

    return (
        <Card className={`message ${isUser && 'message__user'}`} variant="outlined" ref={ref}>
            <CardContent>
                <Typography
                    className=""
                    variant="h5"
                >
                    <span>{message.timestamp.toDate().toLocaleString()}</span>
                    <p>{message.userName}: {message.message}</p>
                </Typography>
            </CardContent>
        </Card>

    );
});


