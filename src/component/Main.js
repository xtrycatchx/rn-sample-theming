import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
//import ThemeProvider from '../theme/themeprovider'
import Button from './Button'
import withTheme from '../theme/withTheme';

class Main extends Component {

  // commenting this coz this was the lazy approach :D
  // for references, so no need to remove
  // render() {
  //   return (
  //     <View style={this.context.theme.rootView}>
  //       <Text style={this.context.theme.label}>Hello World</Text>
  //       <Button onPress={this.props.onChangeTheme} label='Change Theme' />
  //     </View>
  //   );
  // }

  render() {
    return (
      <View style={this.props.theme.rootView}>
        <Text style={this.props.theme.label}>Hello World</Text>
        <Button onPress={this.props.onChangeTheme} label='Change Theme' />
      </View>
    );
  }
}

// not so lazy approach and not polluting context props
// export default withTheme({
//   theme: {
//     rootView: {
//       flex: PropTypes.number,
//       backgroundColor: PropTypes.string,
//       flexDirection: PropTypes.string,
//       justifyContent: PropTypes.string,
//       alignItems: PropTypes.string,
//     },
//     label: {
//       color: PropTypes.string,
//       fontSize: PropTypes.number,
//       fontStyle: PropTypes.string,
//     },
//   }
// })(Main)

// commenting this coz this was the lazy approach :D
//Main.contextTypes = ThemeProvider.childContextTypes;

