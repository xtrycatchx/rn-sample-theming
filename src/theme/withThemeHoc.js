import React from 'react';
import PropTypes from 'prop-types';

// const withTheme = (contextTypes) => (Component) => {
//   ThemedComponent = (props, context) =>
//     <Component {...props} {...context} />;
//   ThemedComponent.contextTypes = contextTypes
//   return ThemedComponent
// };

// export default withTheme;

//const withThemeHoc = (Child) => class extends React.Component {
//  static contextTypes = {
//    theme: PropTypes.object
//  };

//  render() {
//    return <Child {...this.props} {...this.context} />;
//  }
//};

const withThemeHoc = (Child) => {
  return class NewComp extends React.Component {
    static contextTypes = {
      theme: PropTypes.object
    };

    render() {
      return <Child {...this.props} {...this.context}>{this.children}</Comp>
    }
  }
}

export default withThemeHoc;
