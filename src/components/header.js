import React from 'react';
import '../scss/header.scss'

function Header({userName}) {
    return (
        <header className="header">
            <img
                className="app-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1024px-Facebook_Messenger_logo_2020.svg.png"
                alt="messenger logo"
            />

            <h1 className="header__heading">Message app</h1>

            <h2 className="header__heading">Welcome
                <span className="welcome">&nbsp;{userName}</span>!
            </h2>
        </header>
    );
}

export default Header;