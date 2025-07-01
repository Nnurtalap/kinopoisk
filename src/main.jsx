// src/main.jsx
import { store } from './app/store';
import App from './components/App';
import ToggleColorMode from './context/ToggleColorMode';
import '@acrool/react-carousel/dist/index.css';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <ToggleColorMode>
        <CssBaseline />
        <App />
      </ToggleColorMode>
    </React.StrictMode>
  </Provider>,
);
