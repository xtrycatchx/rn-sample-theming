import React from 'react';
import PropTypes from 'prop-types';

const withTheme = (Component) => class extends React.PureComponent {
  static contextTypes = {
    theme: PropTypes.object
  };

  render() {
    return <Component {...this.props} {...this.context} />;
  }
};

export default withTheme;