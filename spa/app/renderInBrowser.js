import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// import Routes from './Routes';
// import match from 'react-router/lib/match';
// import applyRouterMiddleware from 'react-router/lib/applyRouterMiddleware';
// import Router from 'react-router/lib/Router';
// import useScroll from 'react-router-scroll/lib/useScroll';
// import AppRoot from 'containers/AppRoot';

// export default function renderInBrowser({ messages, store, routes, history }) {
//   match({ history, routes }, (error, redirectLocation, renderProps) => {
//     ReactDOM.render(
//       <AppRoot store={store} messages={messages}>
//         <Router
//           {...renderProps}
//           render={
//             // Scroll to top when going to a new page, imitating default browser behaviour
//             applyRouterMiddleware(useScroll(
//               (prevRouterProps, { routes }) => {
//                 if (routes.some(route => route.ignoreScrollBehavior)) {
//                   return false;
//                 }
//                 if (routes.some(route => route.scrollToTop)) {
//                   return [0, 0];
//                 }
//                 return true;
//               }
//             ))
//           }
//         />
//       </AppRoot>,
//       document.getElementById('app')
//     );
//   });
// }


export default function renderInBrowser({ messages, store, Routes, history }) {
  if (process.env.NODE_ENV === 'production') {
    ReactDOM.hydrate(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <div>{renderRoutes(Routes)}</div>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    document.getElementById('app'));
  } else {
    ReactDOM.render(// development
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <div>{renderRoutes(Routes)}</div>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    document.getElementById('app'));
  }

}
