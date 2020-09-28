import React from 'react';
import moment from 'moment';

function Break(props) {
    let breakLengthInMinute = moment.duration(props.breakLength, 's').minutes();

    return (
        <section>
        <p id="break-label">Break Length</p>        
        <p>{breakLengthInMinute}</p>
        <button id="break-decrement" onClick={props.decrementBreakLengthByOneMinute}>-</button>
        <button id="break-increment" onClick={props.incrementBreakLengthByOneMinute}>+</button>
    </section>
    );
};

export default Break;