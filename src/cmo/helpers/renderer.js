import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes} from "react-router-config"
import Routes from '../client/Routes';
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'
import {ThemeProvider} from 'styled-components';
import  theme from '../configuration/theme'
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import stats from '../../../public/cmo/react-loadable.json';


export default (req, store,context,sheet) => {
  let modules = [];
  const content = renderToString(sheet.collectStyles(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context} >
        <ThemeProvider theme={theme}><div>{renderRoutes(Routes)}</div></ThemeProvider>
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  ));
  const styles = sheet.getStyleTags(); // get current stylesheet for ssr
  const helmet = Helmet.renderStatic();
  let bundles = getBundles(stats, modules);
  console.log(modules);

  return `
  <html>
    <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${styles}
    ${helmet.script.toString()}
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src="/cmo/bundle.js"></script>
      ${bundles.map(bundle => {
        return `<script src="${bundle.publicPath}"></script>`
        // alternatively if you are using publicPath option in webpack config
        // you can use the publicPath value from bundle, e.g:
        // return `<script src="${bundle.publicPath}"></script>`
      }).join('\n')}
      <script src="/cmo/main.js"></script>
     
    </body>
  </html>
  `;


}