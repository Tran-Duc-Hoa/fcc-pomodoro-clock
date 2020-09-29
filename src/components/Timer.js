import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

momentDurationFormatSetup(moment);

function Timer({
    timeLeft,
    isStarted,
    currentDurationType,
    handleStartStopClick,
    handleResetButtonClick
}) {
    // Change timerLeft whenever sessionLength changes

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false})

    return (
        <div>
            <p id="timer-label">{currentDurationType}</p>
            <span id="time-left">{formattedTimeLeft}</span>
            <div>
                <button id="start_stop" onClick={handleStartStopClick}>
                    {isStarted 
                        ? <FontAwesomeIcon icon={faStop} />
                        : <FontAwesomeIcon icon={faPlay} />}
                </button>
                <button id="reset" onClick={handleResetButtonClick}>
                    <FontAwesomeIcon icon={faSyncAlt} />
                </button>
            </div>
        </div>
    );
}

export default Timer;