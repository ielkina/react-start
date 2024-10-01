import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Example1 } from 'components/Example1';
import { Reader } from 'components/Reader/Reader';
import './index.css';
import publications from './data/publications.json';

const theme = {};

//Старый синтаксис
// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <Reader items={publications} />
//     </ThemeProvider>
//     {/* <Example1/> */}
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reader items={publications} />
    </ThemeProvider>
    <Example1/>
  </React.StrictMode>,
);


// https://youtu.be/FbXe8QOW9jI?t=768