import React from 'react';

const withTheme = (contextTypes) => (Component) => {
  ThemedComponent = (props, context) =>
    <Component {...props} {...context} />;
  ThemedComponent.contextTypes = contextTypes
  return ThemedComponent
};

export default withTheme;