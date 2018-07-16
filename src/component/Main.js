import React, { PureComponent } from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';
import withTheme from '../theme/withTheme';

class Main extends PureComponent {
  render() {
    const { onChangeTheme, theme } = this.props;
    const { rootView, label } = theme;
    return (
      <View style={rootView}>
        <Text style={label}>
        Hello World
        </Text>
        <Button onPress={onChangeTheme} label="Change Theme" />
      </View>
    );
  }
}

Main.propTypes = {
  theme: ViewPropTypes.style.isRequired,
  onChangeTheme: PropTypes.func.isRequired,
};

export default withTheme(Main);
