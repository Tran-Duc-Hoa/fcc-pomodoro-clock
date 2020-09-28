import React, { useState } from 'react';
import logo from './logo.svg';
//import .css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import components
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';


function App() {
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(1500);
    
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
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
