import React from 'react';
import moment from 'moment';

function Session(props) {
    

    let sessionLengthInMinute = moment.duration(props.sessionLength, 's').minutes();

    return (
        <section>
        <p id="session-label">Session Length</p>        
        <p id="session-length">{sessionLengthInMinute}</p>
        <button id="session-decrement" onClick={props.decrementSessionLengthByOneMinute}>-</button>
        <button id="session-increment" onClick={props.incrementSessionLengthByOneMinute}>+</button>
    </section>
    );
};

export default Session;