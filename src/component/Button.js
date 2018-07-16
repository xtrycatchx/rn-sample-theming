import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../theme/withTheme';

class Button extends PureComponent {
  render() {
    const { theme, onPress, label } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={60}
        underlayColor={theme.extras.underlayColor}
        onPress={onPress}
        style={theme.button}
      >
        <Text style={theme.buttonLabel}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  theme: ViewPropTypes.style.isRequired,
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default withTheme(Button);
