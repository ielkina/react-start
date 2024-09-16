import React from 'react';
// import React, { Component } from 'react';
import './Container.scss';
// import classNames from 'classnames';

// class Container extends Component {
//   render() {
//     const classNames = 'container';
//     return (
//       <div className={classNames}>
//         {this.props.children}
//       </div>
//     );
//   }
// }

// export default Container;

const Container = ({ children }) => <div className="Container">{children}</div>;

export default Container;
