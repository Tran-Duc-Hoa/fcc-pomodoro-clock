import React, { useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

function Timer({ sessionLength, breakLength }) {
    const [timeLeft, setTimerLeft] = useState(sessionLength);

    const formattedTimeLeft = moment.duration(timeLeft, 's').format
    
    return (
        <section>
            {/*<h4>{isSession === true ? "Session" : "Break" }</h4> */}
            <span></span>
            <span></span>
            <span>
                {/* {timerSecond === 0 
                    ? "00" 
                    : timerSecond < 10 
                    ? "0" + timerSecond            
                    : timerSecond} */}
                {timeLeft}
            </span>
            <section>
                <button>Play</button>
                {/* <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button> */}
            </section>
        </section>
    );
}

export default Timer;