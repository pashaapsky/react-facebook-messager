import React, {useEffect, useState} from 'react';
import Messenger from "./components/messenger";
import Header from "./components/header";

function App() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        setUserName(prompt("Please enter your name"));
    }, []);

    return (
        <div className="App">
            <div className="fixed-container">
                <Header userName={userName} />

                <Messenger userName={userName}/>
            </div>
        </div>
    );
}

export default App;
