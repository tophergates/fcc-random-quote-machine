import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import QuoteBox from './QuoteBox';

import store from '../redux';
import theme from '../styles/theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <QuoteBox />
    </ThemeProvider>
  </Provider>
);

export default App;
