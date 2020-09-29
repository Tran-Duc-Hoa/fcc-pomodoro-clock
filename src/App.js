import React, { useRef, useState } from 'react';
import logo from './logo.svg';
//import .css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import components
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';


function App() {
  const [breakLength, setBreakLength] = useState(300); // 5 * 5 = 300
  const [sessionLength, setSessionLength] = useState(1500); // 25 * 5 = 1500
  const [currentDurationType, setCurrentDurationType] = useState('Session'); // 'Session' or 'Break'
  const [intervalID, setIntervalID] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const audioElement = useRef(null);
    
  const decrementSessionLengthByOneMinute = () => {
      let newSessionLength = sessionLength - 60
      if (newSessionLength < 0) {
          setSessionLength(0);
      } else {
          setSessionLength(newSessionLength);
      }
  };

  const incrementSessionLengthByOneMinute = () => {
      setSessionLength(sessionLength + 60);
  };

  const decrementBreakLengthByOneMinute = () => {
    let newBreakLength = breakLength - 60
    if (newBreakLength < 0) {
        setBreakLength(0);
    } else {
        setBreakLength(newBreakLength);
    }
};

const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60);
};

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
                  if (prevTimeLeft > 0) {
                      return prevTimeLeft - 1;
                  } 
                  // timeLeft is less than zero
                  audioElement.current.play()
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
          }, 500);

          setIntervalID(newIntervalID);
      }
      
  };

  const handleResetButtonClick = () => {
    // reset audio
    audioElement.current.load()
    // clear timeout interval
    clearInterval(intervalID);
    // set the interval null
    setIntervalID(null);
    // set the durationType to 'Session'
    setCurrentDurationType('Session');
    // reset the sessionLength to 25 minutes
    setSessionLength(1500);
    // reset the breakLength to 5 minutes
    setBreakLength(300);
    // reset the Timer to 25 minutes (sessionLength)
    setTimeLeft(1500 );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Pomodoro Clock</p>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div id="clock" className="col-xs-6 col-md-6">
            <h1 id="main-title">25 + 5 Clock</h1>
            <div className="row">
              <div className="col-md-6">
                <Break
                  breakLength={breakLength}
                  decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
                  incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
                />
              </div>
              <div className="col-md-6">
                <Session
                  sessionLength={sessionLength}
                  decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
                  incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
                  
                />
              </div>

            </div>
            <div className="row">
              <div className="col-md-3">
                <p>Empty</p>
              </div>
              <div id="timer-session" className="col-md-6">
                <Timer               
                  breakLength={breakLength}
                  sessionLength={sessionLength}
                  timeLeft={timeLeft}
                  setTimeLeft={setTimeLeft}
                  currentDurationType={currentDurationType}
                  handleStartStopClick={handleStartStopClick}
                  isStarted={isStarted}
                  handleResetButtonClick={handleResetButtonClick}
                />
                <audio id="beep" ref={audioElement}>
                  <source 
                    src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" 
                    type="audio/mpeg" 
                  />
                </audio>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
