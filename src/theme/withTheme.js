import React from 'react';
import { ViewPropTypes } from 'react-native';

export default function withTheme(Component) {
  return class extends React.PureComponent {
    static contextTypes = {
      theme: ViewPropTypes.style.isRequired,
    };

    render() {
      return <Component {...this.props} {...this.context} />;
    }
  };
}
