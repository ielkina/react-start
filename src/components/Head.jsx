// export default
// import React, { Children } from "react";
// import ReactDOM from "react-dom/client";
// import data from "./data.json";

export const Head = (obj) => {
  console.log(`Head  clas >>`, obj);
  const { clas, id } = obj;
  return (
    <p className={clas} id={id}>
      im Head
    </p>
  );
};
