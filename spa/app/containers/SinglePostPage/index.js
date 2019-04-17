/**
 *
 * SinglePostPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSinglePostPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class SinglePostPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>SinglePostPage</title>
          <meta name="description" content="Description of SinglePostPage" />
        </Helmet>
      </div>
    );
  }
}

SinglePostPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  singlePostPage: makeSelectSinglePostPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'singlePostPage', reducer });
const withSaga = injectSaga({ key: 'singlePostPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SinglePostPage);
