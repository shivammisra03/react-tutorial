import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({ type: type, msg: message })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert('success', 'Dark Mode has been enabled')
      document.title = 'TextUtils - Dark Mode'
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light Mode has been enabled')
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils2" aboutText="About Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About/> */}
        {/* <Switch> */}
          {/* /users -> Component 1 */}
          {/* /users/home -> Component 2 */}
          {/* <Route exact path="/about">
            <About />
          </Route>
        
          <Route exact path="/"> */}
              <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
          {/* </Route>
        </Switch> */}

        {/* <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} /> */}


      </div>
      {/* </Router> */}

    </>
  );
}

export default App;
