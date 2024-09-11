/* eslint-disable no-unused-vars */
// import React from 'react';
import React, { Children } from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import { App } from 'components/App/App';
import { theme } from 'constant/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

//https://youtu.be/S9-zFqxeEr8?t=2316
