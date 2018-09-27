import React from 'react';
import ThemeContext from './themecontext';

const withTheme = (NakedComponent) => {
  const withHoc = props => (
    <ThemeContext.Consumer>
      {
        ({ theme }) => <NakedComponent {...props} theme={theme} />
      }
    </ThemeContext.Consumer>
  );
  withHoc.NakedComponent = NakedComponent;
  return withHoc;
};

export default withTheme;
