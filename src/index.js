import React from 'react';
import {StrictMode} from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

import App from 'components/App';
// import './index.css';
// import paintings from './data/painting.json';

console.log('component');

// const span1 = React.createElement('span', { children: "Привет" })
// const span2 = React.createElement('span', { children: "мир" })

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: ['Привет мир']
//   // children: [span1, ' ', span2]
// })

// console.log(element);
// ReactDOM.render(element, document.querySelector('#root'))

//!******************************************************************************************************************
//Переписываем на jsx элементы
// import React from 'react'; // в новых версиях можно не импортировать

// const elem1 = <span>Привет</span>
// const elem2 = <span>мир</span>

// // const jsxElm = <div>'Привет мир'</div>
// const jsxElm = (
//   <div>
//     {elem1} {elem2}
//   </div>)

// console.log(jsxElm);

// ReactDOM.render(jsxElm, document.querySelector('#root'))

// const data = {
//   "id": "id-1",
//   "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   "title": "Feathers. Art abstract",
//   "price": 500,
//   "author": {
//     "tag": "ractapopulous",
//     "url": "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   "quantity": 10
// }

// const {
//   id,
//   url,
//   title,
//   price,
//   author: { tag, url: authorUrl },
//   quantity
// } = data;

// //одинарные теги всегда должны быть закрывающим косым флешом
// const painting = (
//   <div>
//     <img src={url} alt={title} width="480" />
//     <h2>{title}</h2>
//     <p>Автор: <a href={authorUrl}>{tag}</a></p>
//     <p>Цена: {price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии {quantity}</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// )

// ReactDOM.render(painting, document.querySelector('#root'))

// console.log(painting);

// Переписываем с импортом data.json

// const data1 = paintings[1];
// const data2 = paintings[2];

// const painting1 = (
//   <div>
//     <img src={data1.url} alt={data1.title} width="480" />
//     <h2>{data1.title}</h2>
//     <p>Автор: <a href={data1.author.url}>{data1.author.tag}</a></p>
//     <p>Цена: {data1.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии {data1.quantity}</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// )

// const painting2 = (
//   <div>
//     <img src={data2.url} alt={data2.title} width="480" />
//     <h2>{data2.title}</h2>
//     <p>Автор: <a href={data2.author.url}>{data2.author.tag}</a></p>
//     <p>Цена: {data2.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии {data2.quantity}</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// )

// const elms = ( //масштабируем рендеринг
//   <div>
//     {painting1}
//     {painting2}
//   </div>
// )

// ReactDOM.render(elms, document.querySelector('#root'))

//**************************************************************************************************** */

//функция рендеринга базы данных с многочисленным элементами

// function Painting(props) {
//   //Имя функции пишут с большой буквы так как при рендеринге react воспринимает как строку а с большой как переменную
//   console.log(props);
//   //деструктуризация пропсов так же можно деструктурировать в круглых скобках фн (сигнатуре)
//   const { url, title, authorUrl, tag, price, quantity } = props;
//   return (
//     <div>
//       <img src={props.url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={authorUrl}>{tag}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии {quantity}</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }

// const paint = paintings[1];

// const {
//   id,
//   url,
//   title,
//   price,
//   author: { tag, url: authorUrl },
//   quantity,
// } = paint;

// ReactDOM.render(
//   <Painting
//     //пропсы переданы с деструктурированного обьекта и на прямую
//     //a='5' b={10} - props
//     a="5"
//     b={10}
//     url={paint.url}
//     title={title}
//     tag={tag}
//     authorUrl={authorUrl}
//     price={price}
//     quantity={quantity}
//   />,
//   document.querySelector('#root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// ReactDOM.render(<App />, document.querySelector('#root'));

//новый синтаксис react 18.1
// const root = createRoot(document.getElementById('root')).render(<App />);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );