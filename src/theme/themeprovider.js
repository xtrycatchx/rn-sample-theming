import React from 'react';
import ThemeContext from './themecontext';

const ThemeProvider = ({ theme, children }) => (
  <ThemeContext.Provider value={{ theme }}>
    {children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
