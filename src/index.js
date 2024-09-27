import React from 'react';
import ReactDOM from 'react-dom/client';
// import * as Sentry from "@sentry/react";
import 'modern-normalize/modern-normalize.css';
import App from './App';
import 'styles/base.scss';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);