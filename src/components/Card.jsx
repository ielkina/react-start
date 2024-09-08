// import React, { Children } from "react";
// import ReactDOM from "react-dom/client";
import data from "../data.json";
import { Head } from "./Head";

export const Card = () =>
  data.map((photo) => {
    const { url, title, id } = photo;
    return (
      <div key={id} className="card mx-auto my" style={{ width: "18rem" }}>
        <img src={url} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* {Head({ clas: "card-title", id: "id-1233" })} */}
          <Head clas="card-title" id="id-123" />
          <a href="http" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
