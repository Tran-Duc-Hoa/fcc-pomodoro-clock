import React, { useEffect, useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

function Timer({ sessionLength, breakLength }) {
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    // Change timerLeft whenever sessionLength changes
    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss')
    
    const handleStartStopClick = () => {
        setInterval(() => {
            // decrement timeLeft by one every second
            setTimeLeft(prevTimeLeft => {
                const newTimeLeft = prevTimeLeft - 1;
                if (newTimeLeft >= 0) {
                    return prevTimeLeft - 1;
                }
                return prevTimeLeft;

            });
        }, 1000);
    };

    return (
        <section>
            {/*<h4>{isSession === true ? "Session" : "Break" }</h4> */}
            <span>{formattedTimeLeft}</span>
            <section>
                <button onClick={handleStartStopClick}>Play</button>
                {/* <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button> */}
            </section>
        </section>
    );
}

export default Timer;