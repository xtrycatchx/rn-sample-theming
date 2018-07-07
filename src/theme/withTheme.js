import React from 'react';

// const withTheme = (contextTypes) => (Component) => {
//   ThemedComponent = (props, context) =>
//     <Component {...props} {...context} />;
//   ThemedComponent.contextTypes = contextTypes
//   return ThemedComponent
// };

// export default withTheme;

const withTheme = (Child) => class extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object
  };

  render() {
    return <Child {...this.props} {...this.context} />;
  }
};

export default withTheme;