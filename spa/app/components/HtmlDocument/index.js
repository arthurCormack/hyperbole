/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import htmlescape from 'htmlescape';

// We use this component only on the server side.
export default function HtmlDocument({ lang, head, css, appMarkup, state, assets }) {
  const attrs = head.htmlAttributes.toComponent();
  const t = new Date();
  const timstamp = `${t.toISOString()}`;
  return (
    <html lang={lang} {...attrs}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="ssr-timestamp" content={timstamp} />
        {/* Allow installing the app to the homescreen */}


        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Everything Zoomer" />

        {/* iOS home screen icons */}
        <link rel="apple-touch-icon" sizes="120x120" href="/icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-180x180.png" />
        <link rel="icon" href="/favicon.ico" />

        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}

        {/* vendor.css */}
        <link href={assets.main.css} rel="stylesheet" />
        {/* app css */}
        {/* <style type="text/css" dangerouslySetInnerHTML={{ __html: css }} /> */}
        {/* server side rendered css style tags */}
        { css }
      </head>
      <body>

        {/* Display a message if JS has been disabled on the browser. */}
        <noscript>
          If you are seeing this message, that means <strong>JavaScript has been disabled on your browser</strong>
          , please <strong>enable JS</strong> to make this app work.
        </noscript>
        
        <div id="app">
          {/* our app markup */}
          <div dangerouslySetInnerHTML={{ __html: appMarkup }} />
        </div>

        {/* our app state */}
        <script dangerouslySetInnerHTML={{ __html: `APP_STATE = ${htmlescape(state)}` }} />

        {/* dev only */}
        {/*
        {(webpackDllNames || []).map((dllName) =>
          <script data-dll key={dllName} src={`/${dllName}.dll.js`}></script>
        )}
        */}

        {/* our app code */}
        <script type="text/javascript" src={assets.main.js}></script>

        {/* see app/setup/openSansObserver.js */}
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet" />
      </body>
    </html>
  );
}

HtmlDocument.propTypes = {
  lang: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  css: PropTypes.arrayOf(PropTypes.node).isRequired,
  appMarkup: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  assets: PropTypes.shape({
    main: PropTypes.shape({
      js: PropTypes.string.isRequired,
      css: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
