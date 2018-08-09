import React, { Component } from 'react';
import balloon from './balloon.png';
import Confetti from 'react-confetti'
import './App.css';

class App extends Component {
  state = {
    confetti: false
  }
  confettiMe = () => {
    this.setState({
      confetti: !this.state.confetti
    })
  }
  render() {
    console.log('click the balloon')
    return (
      <div>
        <ul>
          { this.state.confetti ? <Confetti width="2000" height="1000"/> : null }
          <li><img onClick={this.confettiMe} src={balloon} className="App-logo" alt="balloon" /></li>
          <li>Thank You Marco</li>
        </ul>
      </div>
    );
  }
}

export default App;
