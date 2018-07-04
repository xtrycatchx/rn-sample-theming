import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ThemeProvider from '../theme/themeprovider'
import Button from './Button'

export default class Main extends Component {
  render() {
    return (
      <View style={this.context.theme.rootView}>
        <Text style={this.context.theme.label}>Hello World</Text>
        <Button onPress={this.props.onChangeTheme} label='Change Theme' />
      </View>
    );
  }
}

