import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Session(props) {
    
    let sessionLengthInMinute = moment.duration(props.sessionLength, 's').asMinutes();

    return (
        <div id="session">
            <p id="session-label">Session Length</p>        
            <p id="session-length">{sessionLengthInMinute}</p>
            <button id="session-decrement" className="buttonUpDown" onClick={props.decrementSessionLengthByOneMinute}>
                <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <button id="session-increment" className="buttonUpDown" onClick={props.incrementSessionLengthByOneMinute}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
};

export default Session;