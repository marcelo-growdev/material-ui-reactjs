import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import ThemeDefault from './config/theme/Default';

import AppRoutes from './routes/AppRoutes';
import StylesGlobal from './config/GlobalStyles';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={ThemeDefault}>
        <StylesGlobal />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
