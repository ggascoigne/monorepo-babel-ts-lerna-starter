import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './AppWrapper';
import './index.css';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

const render = (Component: React.ComponentType) => {
  return ReactDOM.render(<Component />, rootElement);
};

render(AppWrapper as React.ComponentType);

if (module.hot) {
  module.hot.accept('./AppWrapper', () =>
    render(require('./AppWrapper').default),
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
