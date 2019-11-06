/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';

import injectSaga, { useInjectSaga } from 'utils/injectSaga';

import { makeSelectInitialPosts } from './selectors';

// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';
import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
import Section from './Section';
// import messages from './messages';
// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

const withSaga = injectSaga({ key, saga });

// the useInjectSaga hook compositional approach works on the client, but doesn't trigger the saga on the server, so instead, we use the redux compose, withSaga, approach.

const stateSelector = createStructuredSelector({
  initialPosts: makeSelectInitialPosts(),
});

function HomePage({ initialPosts }) {

  // const { initialPosts } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });

  // useEffect(() => {
  //   // When initial state username is not null, submit the form to load repos
  //   // if (username && username.trim().length > 0) onSubmitForm();
  // }, []);

  // const reposListProps = {
  //   loading,
  //   error,
  //   repos,
  // };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            {initialPosts.posts}
          </H2>
         
        </CenteredSection>
        <Section>
          <H2>
            This is Hyperbole!
          </H2>
          <p>
            Lorem Ipsum ...
          </p>
        </Section>
      </div>
    </article>
  );
}

// HomePage.propTypes = {
//   // loading: PropTypes.bool,
//   // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//   // onSubmitForm: PropTypes.func,
//   // username: PropTypes.string,
//   // onChangeUsername: PropTypes.func,
// };

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}

const mapStateToProps = createStructuredSelector({
  initialPosts: makeSelectInitialPosts(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default {
  component: compose(
    withConnect,
    withSaga,
    memo,
  )(HomePage)
};