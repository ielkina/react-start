/* eslint-disable no-unused-vars */
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
// import data from "./data.json";
import { Card } from "./components/Card";
// import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

//JS синтаксис

// const div = document.createElement("div");
// const root = document.getElementById("root");
// root.append(div)

//React синтаксис

// const root = document.getElementById("root");

// const div = React.createElement("div", { name: "main" });
// div.id = "id";
// div.classList = "class";

// const paragraph = React.createElement("p", {
//   id: "p-id",
//   children: "Im Paragraph",
// });

// const p = <p id="p-idd">Im P</p>;
// const block = <div>Block {p}</div>;
// const div = React.createElement(
//   // Элемент -> Атрибуты -> Чилдрен(содержимое тега)
//   "div",
//   {
//     name: "name",
//     id: "id",
//     className: "class",
//     children: ["Hello", " ", "there", paragraph, block],
//   }
//   // "Hello", 'there'
// );

// console.log(`div >>`, div);
// const Head = (obj) => {
//   console.log(`Head  clas >>`, obj);
//   const { clas, id } = obj;
//   return (
//     <p className={clas} id={id}>
//       im Head
//     </p>
//   );
// };

// const Card = () =>
//   data.map((photo) => {
//     const { url, title, id } = photo;
//     return (
//       <div key={id} className="card mx-auto my" style={{ width: "18rem" }}>
//         <img src={url} className="card-img-top" alt={title} />
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           {/* {Head({ clas: "card-title", id: "id-1233" })} */}
//           <Head clas="card-title" id="id-123" />
//           <a href="http" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     );
//   });
// console.log(`card >>`, card);

// ReactDOM.createRoot(root).render(div);
// ReactDOM.createRoot(document.getElementById("root")).render(div);
// ReactDOM.createRoot(document.getElementById("root")).render(card());
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);

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
