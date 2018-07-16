import React from 'react';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

class ThemeProvider extends React.Component {
  static childContextTypes = {
    theme: ViewPropTypes.style.isRequired,
  };

  getChildContext() {
    const { theme } = this.props;
    return { theme };
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ThemeProvider.propTypes = {
  theme: ViewPropTypes.style.isRequired,
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
