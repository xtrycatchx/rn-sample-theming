import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import withTheme from '../theme/withTheme';

class Button extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={60}
        underlayColor={this.props.theme.extras.underlayColor}
        onPress={this.props.onPress}
        style={this.props.theme.button}>
        <Text style={this.props.theme.buttonLabel}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

export default withTheme(Button)