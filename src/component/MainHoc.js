import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ButtonHoc from './ButtonHoc';
import withThemeHoc from '../theme/withThemeHoc';

const MainHoc = ({ onChangeTheme, theme }) => (
  <View style={theme.rootView}>
    <Text style={theme.label}>Hello World</Text>
    <ButtonHoc onClick={onChangeTheme} theme={theme}>
      <Text style={theme.buttonLabel}>Change Label</Text>
    </ButtonHoc>
  </View>
);

export default withThemeHoc(MainHoc);

