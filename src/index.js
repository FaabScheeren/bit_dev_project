import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Store from './store/reducers/reducer'

ReactDOM.render(
  <React.StrictMode>
      <Store>
        <App />
      </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
