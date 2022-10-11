import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';


// STEP 1 Run > npm i react-router-dom
// STEP 2 Run > npm i bootstrap
// STEP 3 import BrowserRouter
import {BrowserRouter as Router} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* STEP 4 Router */}
    <Router>
      <App />
    </Router>
    {/* STEP 5 Create Component 1. new folder /components/Login  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
