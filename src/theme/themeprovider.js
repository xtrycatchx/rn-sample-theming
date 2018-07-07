import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default class ThemeProvider extends Component {
  // getChildContext() {
  //   return {
  //     theme: this.props.theme,
  //   };
  // }
  // render() {
  //   return Children.only(this.props.children);
  // }
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object
  };

  static childContextTypes = {
    theme: PropTypes.object
  };

  getChildContext() {
    return { theme: this.props.theme };
  }

  render() {
    return this.props.children;
  }
}

// temporary, this will be replaced with HOC soon
// ThemeProvider.childContextTypes = {
//   theme: PropTypes.object
// }

// ThemeProvider.childContextTypes = {
//   theme: PropTypes.shape({
//     rootView: {
//       flex: PropTypes.number,
//       backgroundColor: PropTypes.string,
//       flexDirection: PropTypes.string,
//       justifyContent: PropTypes.string,
//       alignItems: PropTypes.string,
//     },
//     button: {
//       borderRadius: PropTypes.number,
//       padding: PropTypes.number,
//       backgroundColor: PropTypes.string,
//       margin: PropTypes.number,
//     },
//     buttonLabel: {
//       color: PropTypes.string,
//       fontStyle: PropTypes.string,
//     },
//     label: {
//       color: PropTypes.string,
//       fontSize: PropTypes.number,
//       fontStyle: PropTypes.string,
//     },
//     extras: {
//       underlayColor: PropTypes.string,
//     }
//   }),
// };