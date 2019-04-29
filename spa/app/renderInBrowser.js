import React from 'react';
import ReactDOM from 'react-dom';


import { ConnectedRouter, MemoryRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

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
