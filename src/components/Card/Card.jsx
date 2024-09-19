// /* eslint-disable no-unused-vars */
// import React, { Children } from "react";
// import ReactDOM from "react-dom/client";
// import data from "../../data.json";
// import { Head } from "../Head/Head";
// import { clsx } from "clsx";
// import './Card.css'
// import css from "./Card.module.css";
// import styled from "styled-components";
// import { Container, Photo } from "./Card.style";
import data from '../../data.json'
import { Head } from '../Head/Head'
import { Container, Photo } from './Card.styled'

// import clsx from 'clsx'

// import css from './Card.module.css'

//С помощью пакета styled-components

// const Container = styled.div`
//   background-color: red;
//   color: black;
//   width: 300px;
// `;
// const Photo = styled.img`
//   width: 300px;
//   height: 200px;
// `;

export const Card = ({ isOnline, isOffline }) =>
  data.map((photo) => {
    const { url, title, id } = photo;
    return (
      <Container key={id} id="test" ishide={isOnline}>
        <Photo src={url} alt={title} />
        <div>
          <h5>{title}</h5>
          <Head clas="card-title" id="id-123">
            Место для children
            <div>Второй children</div>
            <p>Третий children</p>
          </Head>
          <a href="http">Button</a>
        </div>
      </Container>
    );
  });



//модули

// const { main, red, blue } = css;

// export const Card = ({ isOnline }) =>
//   data.map((photo) => {
//     const { url, title, id } = photo;
//     return (
//       <div
//         key={id}
//         id="test"
//         // подключаем фрагментарно стили из модульного файла стилей
//         //это позволяет давать классам уникальные суффиксы к примеру Card_main__yBkwV и они будут отличаться
//         // className={css.main}
//         //стили по условию
//         // className={isOnline ? css.red : css.blue}
//         //шаблон класса .main.red и main.blue
//         // className={
//         //   isOnline ? `${css.main} ${css.red}` : ` ${css.main} ${css.blue}`
//         // }
//         //или с деструктурированными значениями
//         // className={isOnline ? ` ${red}` : ` ${blue}`}
//         //шаблон класса с помощью библиотеки clsx
//         // className={clsx(css.main, isOnline && css.red, !isOnline && css.blue)}
//         // className={clsx(css.main, isOnline ? css.red : css.blue)}
//         // className={clsx(css.main, {
//         //   //внутри обьекта нельзя обращаться к ключам ссылаясь на значение ключей в других объектах
//         //   //поэтому их надо обернуть в квадратные скобки
//         //   [css.red]: isOnline,
//         //   [css.blue]: !isOnline,
//         // })}
//         // style={{
//         //   backgroundColor: "#e4cea1",
//         //   textDecoration: "underLine",
//         // }}
//       >
//         <img src={url} alt={title} />
//         <div>
//           <h5>{title}</h5>
//           <Head clas="card-title" id="id-123">
//             Место для children
//             <div>Второй children</div>
//             <p>Третий children</p>
//           </Head>
//           <a href="http">Button</a>
//         </div>
//       </div>
//     );
//   });

// export const Card = () =>
//   data.map((photo) => {
//     const { url, title, id } = photo;
//     return (
//       <div key={id} className="card mx-auto my" style={{ width: "18rem" }}>
//         <img src={url} className="card-img-top" alt={title} />
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <Head clas="card-title" id="id-123">
//             Место для children
//             <div>Второй children</div>
//             <p>Третий children</p>
//           </Head>
//           <a href="http" className="btn btn-primary">
//             Button
//           </a>
//         </div>
//       </div>
//     );
//   });
