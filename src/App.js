import React, { Component } from 'react';
import balloon from './balloon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
        </header>
        <ul>
          <li><img src={balloon} className="App-logo" alt="balloon" /></li>
          <li>Thank You Marco</li>
        </ul>
      </div>
    );
  }
}

export default App;
