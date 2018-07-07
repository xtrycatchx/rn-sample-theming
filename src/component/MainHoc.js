import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ButtonHoc from './ButtonHoc'
import withTheme from '../theme/withTheme';

const MainHoc = ({ onChangeTheme, theme }) => (
  <View style={theme.rootView}>
    <ButtonHoc onClick={onChangeTheme} theme={theme}>
      <Text style={theme.buttonLabel}>Change Label</Text>
    </ButtonHoc>
  </View>
);

export default withTheme(MainHoc);

