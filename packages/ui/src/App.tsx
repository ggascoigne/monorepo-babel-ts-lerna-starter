import { LoginForm } from '@taxi/login-form';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  public render() {
    const onClick = () => alert('logIn clicked');
    return (
      <div className="App">
        <LoginForm onClick={onClick} />
      </div>
    );
  }
}

export default App;
