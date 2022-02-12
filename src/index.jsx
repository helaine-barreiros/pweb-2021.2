import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles/global.css';

const StrictModeApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<StrictModeApp />, document.getElementById('root'));
