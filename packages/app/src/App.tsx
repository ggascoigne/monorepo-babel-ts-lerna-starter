import { FancyButton } from '@taxi/fancy-button';
import { LoginForm } from '@taxi/login-form';
import React, { Component } from 'react';
import './App.css';

export class App extends Component {
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
