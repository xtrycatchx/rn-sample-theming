import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import withTheme from '../theme/withTheme';


const Button = ({ children, onClick, theme }) => (
  <TouchableHighlight
    activeOpacity={60}
    underlayColor={theme.extras.underlayColor}
    onPress={onClick}
    style={theme.button}
  >
    {children}
  </TouchableHighlight>
);
export default withTheme(Button);