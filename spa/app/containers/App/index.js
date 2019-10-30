/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
// import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App = ({ route }) => {
  return (
    <AppWrapper>
      {/* <GoogleTagManager gtmId='GTM-5RD8FD' /> */}
      <Helmet
        titleTemplate="%s - Hyperbole"
        defaultTitle="Hyperbole"
        meta={[
          { name: 'description', content: 'Hyperbole' },
          // { property: 'fb:app_id', content: 534273583592060 },
        ]}
      >
        <meta name="description" content="Hyperbole" />
      </Helmet>
      <Header />
      {renderRoutes(route.routes)}
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

export default {
  component: App,
};