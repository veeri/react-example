import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from  './Components/Form';
import Calculator from './Components/Calculator';
import {WelcomeDialog} from './Components/Containment'

function App() {
  return (
    <div className="App">
      <WelcomeDialog />
      {/* <div>
        <Form ></Form>
      </div>
      &nbsp;
      <div>
        <Calculator />
      </div> */}
    </div>
  );
}

export default App;
