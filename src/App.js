import React, { useRef, useState, useEffect } from 'react';
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
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [currentDurationType, setCurrentDurationType] = useState('Session'); // 'Session' or 'Break'
  const [intervalID, setIntervalID] = useState(null);
  const audioElement = useRef(null);
  
  useEffect(() => {
      setTimeLeft(sessionLength);
  }, [sessionLength]);
  // Listen to timeLeft changes
  useEffect(() => {
    // if timeLeft is zero
    if (timeLeft === 0) {
      // play the audio
      audioElement.current.play();
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
    }
  }, [timeLeft, breakLength, sessionLength, currentDurationType]);

  const decrementSessionLengthByOneMinute = () => {
      let newSessionLength = sessionLength - 60;
      if (newSessionLength > 0) {
        setSessionLength(newSessionLength);
      }
  };

  const incrementSessionLengthByOneMinute = () => {
    let newSessionLength = sessionLength + 60;
    if (newSessionLength <= 3600) {
      setSessionLength(newSessionLength);
    }
    
  };

  const decrementBreakLengthByOneMinute = () => {
    let newBreakLength = breakLength - 60;
    if (newBreakLength > 0) {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    let newBreakLength = breakLength + 60;
    if (newBreakLength <= 3600) {
      setBreakLength(newBreakLength);
    }
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
              setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
          }, 1000);

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
    setTimeLeft(sessionLength);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="header-title">Pomodoro Clock</p>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">

          </div>
          <div id="clock" className="col-sm-12 col-md-6">
            <h1 id="main-title">25 + 5 Clock</h1>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <Break
                  breakLength={breakLength}
                  decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
                  incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <Session
                  sessionLength={sessionLength}
                  decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
                  incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
                />
              </div>
              <div className="col-md-3"></div>
              <div id="timer-session" className="col-sm-12 col-md-6">
                <Timer  
                  currentDurationType={currentDurationType}
                  sessionLength={sessionLength}
                  isStarted={isStarted}
                  timeLeft={timeLeft}
                  setTimeLeft={setTimeLeft}
                  handleStartStopClick={handleStartStopClick}
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
