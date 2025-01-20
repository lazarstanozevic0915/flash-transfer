import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './assets/style/global.scss';

import { Routers } from './routers';
import { Provider } from './provider';
import { MuiThemeProvider } from './theme';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider>
      <MuiThemeProvider>
      <Routers />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals();