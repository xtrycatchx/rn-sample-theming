// @flow
import React from 'react';
import ThemeContext from './themecontext';

type Props = {
  theme: Object,
  children: Object
}

const ThemeProvider = ({ theme, children } : Props) => (
  <ThemeContext.Provider value={{ theme }}>
    {children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
