import React, { useEffect, useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

function Timer({ sessionLength, breakLength }) {
    const [currentDurationType, setCurrentDurationType] = useState('Session'); // 'Session' or 'Break'
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    const [intervalID, setIntervalID] = useState(null);
    // Change timerLeft whenever sessionLength changes
    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false})
    const isStarted = intervalID;
    const handleStartStopClick = () => {
        if (isStarted) {
            // if clock in started mode and we want to stop
            clearInterval(intervalID);
            setIntervalID(null);
        } else {
            const newIntervalID = setInterval(() => {
                // decrement timeLeft by one every second
                setTimeLeft(prevTimeLeft => {
                    const newTimeLeft = prevTimeLeft - 1;
                    if (newTimeLeft >= 0) {
                        return prevTimeLeft - 1;
                    } 
                    // if session
                    if (currentDurationType === 'Session') {
                        //switch to break
                        setCurrentDurationType('Break');
                        // set timeLeft to sessionLength
                        setTimeLeft(breakLength);
                    }
                    // if break
                    else if (currentDurationType === 'Break') {
                        //switch to session
                        setCurrentDurationType('Session');
                        // set timeLeft to breakLength
                        setTimeLeft(sessionLength);
                    }
                    

    
                });
            }, 100);

            setIntervalID(newIntervalID);
        }
        
    };

    return (
        <section>
            <p id="timer-label">{currentDurationType}</p>
            <span>{formattedTimeLeft}</span>
            <button id="start_stop" onClick={handleStartStopClick}>{isStarted ? 'Stop' : 'Start'}</button>
            <button id="reset">Reset</button>
        </section>
    );
}

export default Timer;