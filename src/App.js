import React, { Component } from 'react';
import ThemeProvider from './theme/themeprovider';
import dayMode from './theme/daymode';
import nightMode from './theme/nightmode';
import Main from './component/Main';

export default class App extends Component {
  
  state = {
      theme: dayMode
  }
  
  switchTheme = () => {
    this.setState({
      theme: this.state.theme === dayMode ? nightMode : dayMode
    })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Main onChangeTheme={this.switchTheme} />
      </ThemeProvider>
    );
  }
}
