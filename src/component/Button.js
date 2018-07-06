import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
//import ThemeProvider from '../theme/themeprovider';
import withTheme from '../theme/withTheme'

class Button extends Component {
  // render() {
  //   return (
  //     <TouchableHighlight
  //       activeOpacity={60}
  //       underlayColor={this.context.theme.extras.underlayColor}
  //       onPress={this.props.onPress}
  //       style={this.context.theme.button}
  //     >
  //       <Text style={this.context.theme.buttonLabel}>{this.props.label}</Text>
  //     </TouchableHighlight>
  //   );
  // }
  render() {
    return (
      <TouchableHighlight
        activeOpacity={60}
        underlayColor={this.props.theme.extras.underlayColor}
        onPress={this.props.onPress}
        style={this.props.theme.button}
      >
        <Text style={this.props.theme.buttonLabel}>{this.props.label}</Text>
      </TouchableHighlight>
    );
  }
}

//Button.contextTypes = ThemeProvider.childContextTypes;

export default withTheme({
  theme: {
    underlayColor: PropTypes.string,
    button: {
      borderRadius: PropTypes.number,
      padding: PropTypes.number,
      backgroundColor: PropTypes.string,
      margin: PropTypes.number,
    },
    buttonLabel: {
      color: PropTypes.string,
      fontStyle: PropTypes.string,
    },
    label: {
      color: PropTypes.string,
      fontSize: PropTypes.number,
      fontStyle: PropTypes.string,
    },
  }
})(Button)