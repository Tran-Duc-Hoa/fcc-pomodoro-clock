import React from 'react';

function BreakLength(props) {
    function decreaseCounter() {
        if(props.breakLength === 1) {
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        if(props.breakLength === 20) {
            return;
        }
        props.increaseBreak();
    }
    return (
        <section>
        <p id="break-label">Break Length</p>
        <button onClick={decreaseCounter}>down</button>
        <p>{props.breakLength}</p>
        <button onClick={increaseCounter}>up</button>
    </section>
    );
};

export default BreakLength;