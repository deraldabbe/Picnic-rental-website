
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { AuthProvider } from './AuthProvider';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      
        <App />
      
    </AuthProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
