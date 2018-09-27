// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import withTheme from '../theme/withTheme';

type Props = {
  theme: Object,
  onChangeTheme: Function,
};

const Main = ({ onChangeTheme, theme }: Props) => (
  <View style={theme.rootView}>
    <Text style={theme.label}>
        Hello World
    </Text>
    <Button onPress={onChangeTheme} label="Change Theme" />
  </View>
);

export default withTheme(Main);
