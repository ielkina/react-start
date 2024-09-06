import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <p>{React.Children.count(children)}</p>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string, //не обязательный
  children: PropTypes.node, //не обязательные 
};

export default Section;
