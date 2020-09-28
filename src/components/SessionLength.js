import React from 'react';

function SessionLength(props) {
    function decreaseCounter() {
        if(props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }

    function increaseCounter() {
        if(props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }
    return (
        <section>
        <p id="session-label">Session Length</p>
        <button onClick={decreaseCounter}>down</button>
        <p>{props.sessionLength}</p>
        <button onClick={increaseCounter}>up</button>
    </section>
    );
};

export default SessionLength;