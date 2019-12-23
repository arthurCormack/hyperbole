/**
 *
 * TestPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectTestPage from './selectors';
import reducer from './reducer';
import saga from './saga';

const stateSelector = createStructuredSelector({
  testPage: makeSelectTestPage(),
});

function TestPage() {
  useInjectReducer({ key: 'testPage', reducer });
  useInjectSaga({ key: 'testPage', saga });

  /* eslint-disable no-unused-vars */
  const { testPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>TestPage</title>
        <meta name="description" content="Description of TestPage" />
      </Helmet>
       THis is the test page. 
       Really?! Is it the test page? What do we have to do to see it working properly?
    </div>
  );
}

TestPage.propTypes = {};

export default {component: TestPage};
