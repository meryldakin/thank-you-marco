import React, { Component } from 'react';
import balloon from './balloon.png';
import Confetti from 'react-confetti'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Confetti width="2000" height="1000"/>
        <ul>
          <li><img src={balloon} className="App-logo" alt="balloon" /></li>
          <li>Thank You Marco</li>
        </ul>
      </div>
    );
  }
}

export default App;
