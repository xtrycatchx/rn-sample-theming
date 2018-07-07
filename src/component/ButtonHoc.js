import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import withThemeHoc from '../theme/withThemeHoc';

const Button = ({ children, onClick, theme }) => (
  <TouchableOpacity
    activeOpacity={60}
    underlayColor={theme.extras.underlayColor}
    onPress={onClick}
    style={theme.button}
  >
    {children}
  </TouchableOpacity>
);
export default withThemeHoc(Button);