/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

/*
  So ... what is the expoected behaviour of the home page on a wordpress?
  to present a composition. Of the latest posts, or, in some cases, a selection of admin controlled posts.
  ... and what else? Sidebar widgets?
  ... A signup for our newsletter thing?
  ... a Poll? Maybe we should ship a custom widget to go with this. Like a React Poll kind of thing. And make a side business, where people can
  ... create polls, and then summmon them into their pages, via api, and tokens.
  .. A slideshow integration, possibly with some other wp slideshow. A way of putting it into json format, and of rendering it.

  ... what cool tricks can we add to the stack? The endless scrolling. The detection mechanism.
  ... THE SMEB! Which is a very cool thing.
  ... the poll thing. The newsletter signup. If we make a poll thing. Then we need to make a standard wp widget to display it. But we also need to make the react component to display it.
  ... the standard wp thing, would also utilize js, only not react. The php would simply place the payload in the page with the credentials needed to retrieve the poll. And it would all be rendered on client, and populated with data asynchronously.
  ... so ... first load of posts/content.... that happens on SSR, and other chunks load ayncrounously on client.
  ... what are the different routes?
  ... initially, we set the permalinks structure to something specific.
  ... and then as a TOD, we could implement some sort of mechanism where we export the permalinks structure model as JSON, and then import it into the build, so that, the SPA can discover, and dynamically map routes to that permalink structure.
  ... Rule: UI, and language used in the UI, like labels, etc, form field labels, etc is in the repo. Content is in the CAA.
  ... The route structure, parity is, congruence between the permalink stucture in WP


  ... the FAPI idea from Drupal, that kind of structure / thinking, as a representaion of certain content, could bridge the gap between structure / layout in WP-land and React-Land.


  ... also consider the best way to store wp post data in state. maybe as a lookuptable of post id and content. And from there, we can have archives, and posts simply look up from that state. And we can also implement a kind of garbage collection from state, and dump the bits of content that need to ge tdumped, soas to not crash the browser
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
// import {
//   makeSelectPostStack,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';
import { makeSelectPostStack, makeSelectLoading, makeSelectError } from './selectors';

import H2 from 'components/H2';


import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

// for SSR, we have to provide the loadData call ... and that is a promise to do a request, then to dispatch at action that will put the result into state.
// this is in the category of a big deal, because it will be the basis of all the SSR data calls
// getting it to work properly, and to do a proper single render call, instead of having to to do the initial sagas, ... well ... is it neccesary really?
// i don't know the answer to that. the only way to really know, is to run side by side comparisons, with both approaches, and see which one performs better, in terms of speed, and cpu + memory requirements.
import request from 'utils/request';
import { APICALLURL_GETFRONTPAGEPOSTS } from 'apiCallURLs';
import { loadFrontPagePosts, loadFrontPagePostsSuccess, loadFrontPagePostsFailure } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    // if (this.props.username && this.props.username.trim().length > 0) {
    //   this.props.onSubmitForm();
    // }
  }

  render() {
    const { loading, error, postStack } = this.props;


    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Hyperbole homepage"
          />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            Hello Hyperbole!
          </Section>
        </div>
      </article>
    );
  }
}

// HomePage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func,
// };

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  postStack: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectPostStack(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default {
  component: compose(
    withReducer,
    withSaga,
    withConnect,
  )(HomePage),
    loadData: ({ dispatch }) => {
    // it looks ok. but I don't really know. 
    return new Promise(
      (resolve, reject) => {
        const requestCallPromise = request(APICALLURL_GETFRONTPAGEPOSTS).then((result) => {
          dispatch(loadFrontPagePostsSuccess(result));
          resolve();
        });
      }
    );

    // dispatch(fetchHomePage());
    /*
    return a promise to load a thing. maybe just fo it with request directly from here. Don't use the saga to call request, just return request
    */

  },
};
