import React from 'react';
import ReactDOM from 'react-dom';


import { ConnectedRouter, MemoryRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// ok. problem that I just noticed is this. renderInBrowser and serverEntry both do a renderRoutes,
// and both contain App.js, which is also doing a renderRoutes. OOPS.
// nned to figure out how to fix that properly.
// also, the Homepage saga is in firing properly, the useInjectSaga, or whatever is not working, ad maybe so is not the reducer, etc. May need to revert back to old way of doing things, with inject / compose structure.
export default function renderInBrowser({ messages, store, Routes, history }) {
  console.log(`renderInBrowser()`);
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
