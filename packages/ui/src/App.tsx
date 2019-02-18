import { FancyButton } from '@taxi/fancy-button-js';
import { LoginForm } from '@taxi/login-form-ts';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  public render() {
    const onClick = () => alert('logIn clicked');
    return (
      <>
        <div className="App">
          <LoginForm onClick={onClick} />
        </div>
        <FancyButton>Fancy</FancyButton>
      </>
    );
  }
}

export default App;
