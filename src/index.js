/* eslint-disable no-unused-vars */
// import React from 'react';
import React, { Children } from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
