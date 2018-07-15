import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default class ThemeProvider extends React.Component {

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