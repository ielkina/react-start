/* eslint-disable no-unused-vars */
// import React from "react";

import PropTypes from "prop-types";

export const Head = ({ clas, id, data, children }) => {
  console.log("Head  children >>", children);
  // console.log(`Head  clas >>`, obj);
  // const { clas, id } = obj;
  return (
    <>
      {/* <></> тоже самое что и React.Fragment */}
      {children}
      <p className={clas} id={id}>
        im Head
      </p>
    </>
  );
};

Head.propTypes = {
  id: PropTypes.string.isRequired,
  clas: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.array,
};
