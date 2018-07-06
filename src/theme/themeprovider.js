import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default class ThemeProvider extends Component {
  getChildContext() {
    return {
      theme: this.props.theme,
    };
  }
  render() {
    return Children.only(this.props.children);
  }
}

// Bye bye lazy approach
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