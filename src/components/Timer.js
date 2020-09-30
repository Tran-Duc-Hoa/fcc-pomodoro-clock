import React, { useEffect } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import $ from 'jquery';
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
    useEffect(() => {
        if (timeLeft < 60) {
            $('#time-left').css('color', 'red');
            $('#timer-label').css('color', 'red');
        } else {
            $('#time-left').css('color', 'white');
            $('#timer-label').css('color', 'white');
        }
    });

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });

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