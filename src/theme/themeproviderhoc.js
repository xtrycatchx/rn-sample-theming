import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default class ThemeProviderHoc extends Component {

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