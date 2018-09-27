import React from 'react';
import { renderRoutes } from 'react-router-config';

import { fetchCurrentUser } from './actions';
//css will implement by this order so GlobalStyle need to be first
import GlobalStyle from '../configuration/GlobalStyle';

const App = ({ route }) => {
  return <GlobalStyle>{renderRoutes(route.routes)}</GlobalStyle>;
};
function loadData(store) {
  return store.dispatch(fetchCurrentUser());
}
export default {
  loadData,
  component: App,
};
