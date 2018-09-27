// @flow
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import withTheme from '../theme/withTheme';

type Props = {
  theme: Object,
  onPress: Function,
  label: string,
};

const Button = ({ theme, onPress, label }: Props) => (
  <TouchableOpacity
    activeOpacity={60}
    onPress={onPress}
    style={theme.button}
  >
    <Text style={theme.buttonLabel}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default withTheme(Button);
