import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
//import ThemeProvider from '../theme/themeprovider';

class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        activeOpacity={60}
        underlayColor={this.context.theme.extras.underlayColor}
        onPress={this.props.onPress}
        style={this.context.theme.button}
      >
        <Text style={this.context.theme.buttonLabel}>{this.props.label}</Text>
      </TouchableHighlight>
    );
  }
}

//Button.contextTypes = ThemeProvider.childContextTypes;

export default withTheme({
  theme: {
    rootView: {
      flex: PropTypes.number,
      backgroundColor: PropTypes.string,
      flexDirection: PropTypes.string,
      justifyContent: PropTypes.string,
      alignItems: PropTypes.string,
    },
    label: {
      color: PropTypes.string,
      fontSize: PropTypes.number,
      fontStyle: PropTypes.string,
    },
  }
})(Button)