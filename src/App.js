import React, { Component } from 'react';
import ThemeProvider from './theme/themeprovider';
import dayMode from './theme/daymode';
import nightMode from './theme/nightmode';
import Main from './component/Main';

export default class App extends Component {
  state = {
    theme: dayMode,
  }

  switchTheme = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme === dayMode ? nightMode : dayMode,
    });
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Main onChangeTheme={() => this.switchTheme()} />
      </ThemeProvider>
    );
  }
}
