import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const input: HTMLElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(input);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
