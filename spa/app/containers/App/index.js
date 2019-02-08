/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

import { renderRoutes } from 'react-router-config';

import { Helmet } from 'react-helmet';

import injectSaga from 'utils/injectSaga';// for making of the global dynamic saga
import { compose } from 'redux';

import { DAEMON } from 'utils/constants';

import styled from 'styled-components';

import saga from './sagas';

// import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
// import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const withSaga = injectSaga({ key: 'App', saga, mode: DAEMON });
const App = ({ route }) => {
  // console.log("App()");
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Hyperbole"
        defaultTitle="Hyperbole"
        meta={[
          { name: 'description', content: 'Hyperbole' },

        ]}
      >
        <meta name="description" content="Hyperbole" />
      </Helmet>
      <Header />
      {renderRoutes(route.routes)}
      <GlobalStyle />
    </AppWrapper>
  );
};

export default {
  component: compose(
    withSaga,
  )(App),
};
