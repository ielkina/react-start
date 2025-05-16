//в контент инфо нам надо делать запрос на сервер/бэкэнд
// import { Component } from "react";
// import { Link } from "react-router-dom";//пакет для ссылок
import "./ContentInfo.scss";
import css from "./ContentInfo.module.css";
import { getNews } from "services/getNews";
import ErrorCard from "../ErrorCard/ErrorCard";


//компонент на
// const STATUS = {
//   IDLE: "idle",
//   PENDING: "pending",
//   REJECTED: "rejected",
//   RESOLVED: "resolved",
// };

// class ContentInfo extends Component {
//   state = {
//     news: null,
//     error: "",
//     status: STATUS.IDLE,
//   };
//   componentDidUpdate(prevProps, prevState) {
//     // console.log("this.props: ", this.props);
//     if (prevProps.searchText !== this.props.searchText) {
//       this.setState({ status: STATUS.PENDING });
//       // fetch -выносим в отдельную функцию/фаил getNews
//       getNews(this.props.searchText, this.props.language)
//         .then((response) => {
//           // console.log("URL:", response.url);
//           // console.log("Status:", response.status);
//           return response.json();
//         })
//         .then((data) => {
//           console.log("Data:", data);
//           if (data.status === "ok")
//             this.setState({
//               news: data.articles,
//               status: STATUS.RESOLVED,
//             });
//           else return Promise.reject(data.message);
//         })
//         .catch((error) => {
//           // console.log("Error: ", this.setState({error, status: STATUS.REJECTED}));
//           this.setState({ error, status: STATUS.REJECTED });
//         });
//     }
//   }

//   render() {
//     const { news, error } = this.state;
//     if (this.state.status === STATUS.PENDING)
//       return (
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       );
//     else if (this.state.status === STATUS.RESOLVED)
//       return (
//         <ul>
//           {news.map((el) => (
//             <li key={el.url} className={css.li}>
//               <p>{el.author}</p>
//               <p>{el.title}</p>
//               <a href={el.url} className={css.a}>
//                 <img src={el.urlToImage} alt={el.title} />
//                 <p>{el.description}</p>
//                 {/* <Link to={el.url}>{el.title}</Link> */}
//               </a>
//               <p>{el.publishedAt}</p>
//             </li>
//           ))}
//           <button>Load more...</button>
//         </ul>
//       );
//     else if (this.state.status === STATUS.REJECTED)
//       return <ErrorCard>{error}</ErrorCard>;
//   }
// }

// export default ContentInfo;


//переписываем на хуки
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom"; // пакет для ссылок


const ContentInfo = ({ searchText, language }) => {
  const [news, setNews] = useState(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!searchText) return;
    setStatus("pending");
    getNews(searchText, language)
      .then((response) => {
        // console.log("URL:", response.url);
        // console.log("Status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        if (data.status === "ok") {
          setNews(data.articles);
          setStatus("resolved");
        } else {
          return Promise.reject(data.message);
        }
      })
      .catch((error) => {
        // console.log("Error: ", this.setState({error, status: STATUS.REJECTED}));
        setError(error);
        setStatus("rejected");
      });
  }, [searchText, language]); //[] - массив зависимостей

  if (status === "pending")
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  else if (status === "resolved")
    return (
      <ul>
        {news.map((el) => (
          <li key={el.url} className={css.li}>
            <p>{el.author}</p>
            <p>{el.title}</p>
            <a href={el.url} className={css.a}>
              <img src={el.urlToImage} alt={el.title} />
              <p>{el.description}</p>
              {/* <Link to={el.url}>{el.title}</Link> */}
            </a>
            <p>{el.publishedAt}</p>
          </li>
        ))}
        <button>Load more...</button>
      </ul>
    );
  else if (status === "rejected") return <ErrorCard>{error}</ErrorCard>;
}
export default ContentInfo;
