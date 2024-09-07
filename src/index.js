import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

//JS синтаксис

// const div = document.createElement("div");
// const root = document.getElementById("root");
// root.append(div)

//React синтаксис

const div = React.createElement("div");
const root = document.getElementById("root");
// ReactDOM.createRoot(root).render(div);
console.log(`<<  div >>`, div)
ReactDOM.createRoot(document.getElementById("root")).render(div);

//! https://youtu.be/2OAcJ99XCeE?t=1988

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
