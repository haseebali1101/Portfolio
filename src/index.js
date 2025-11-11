import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const campusBackground = `${process.env.PUBLIC_URL}/campus-bg.jpg`;
if (campusBackground) {
  document.body.style.setProperty('--app-background-image', `url("${campusBackground}")`);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

