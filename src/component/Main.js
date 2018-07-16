import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import withTheme from '../theme/withTheme';

class Main extends PureComponent {
  render() {
    return (
      <View style={this.props.theme.rootView}>
        <Text style={this.props.theme.label}>Hello World</Text>
        <Button onPress={this.props.onChangeTheme} label="Change Theme" />
      </View>
    );
  }
}

export default withTheme(Main);
