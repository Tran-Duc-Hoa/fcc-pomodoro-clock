import React, { useEffect, useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

function Timer(props) {
    // Change timerLeft whenever sessionLength changes
    useEffect(() => {
        props.setTimeLeft(props.sessionLength);
    }, [props.sessionLength]);

    const formattedTimeLeft = moment.duration(props.timeLeft, 's').format('mm:ss', { trim: false})

    return (
        <section>
            <p id="timer-label">{props.currentDurationType}</p>
            <span id="time-left">{formattedTimeLeft}</span>
            <button id="start_stop" onClick={props.handleStartStopClick}>{props.isStarted ? 'Stop' : 'Start'}</button>
            <button id="reset" onClick={props.handleResetButtonClick}>Reset</button>
        </section>
    );
}

export default Timer;