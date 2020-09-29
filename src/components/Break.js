import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';


function Break(props) {
    let breakLengthInMinute = moment.duration(props.breakLength, 's').asMinutes();

    return (
        <div id="break">
            <p id="break-label">Break Length</p>        
            <p id="break-length">{breakLengthInMinute}</p>
            <button id="break-decrement" className="buttonUpDown" onClick={props.decrementBreakLengthByOneMinute} >
                <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <button id="break-increment" className="buttonUpDown" onClick={props.incrementBreakLengthByOneMinute}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
};

export default Break;