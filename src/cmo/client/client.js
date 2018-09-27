//Startup point for client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';
import { ThemeProvider } from 'styled-components';
import theme from '../configuration/theme';
import Loadable from 'react-loadable';
const axiosInstance = axios.create({
  baseURL: '/api',
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);
Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div>{renderRoutes(Routes)}</div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
  );
});
