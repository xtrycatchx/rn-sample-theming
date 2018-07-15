import React from 'react';
import PropTypes from 'prop-types';

const withThemeHoc = (Component) => class extends React.PureComponent {
  static contextTypes = {
    theme: PropTypes.object,
    demoChangeTheme: PropTypes.func
  };

  render() {
    return <Component {...this.props} {...this.context} />;
  }
};

export default withThemeHoc;