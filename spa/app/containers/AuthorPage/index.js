/*
 *
 * ArchivePage
 *
 * The Archive Page is almost identical to the SinglePostPage
 * It is a stack, but instead of full posts, it loads only partial posts.
 * Also, the address does not change, it is always just 1 consistant address
 * so ... how do we know which new items to load in? do we load 1 at a time? or load batches?
 * how about batches of n, we'll do 1, 2, 3 automatic loads, and then load more will start pagination at page 4 ... or something like that
 *

 */

import React from 'react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { WhiteRow, RedTagSmOnTop } from 'components/styled/Common';

import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { media } from 'style-utils';
import { Grid, Row, Col, Image, Clearfix, Button } from 'react-bootstrap';

import { createStructuredSelector } from 'reselect';


import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { RESTART_ON_REMOUNT } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';



// import Waypoint from 'react-waypoint';
// import { DFPManager } from 'react-dfp';
// import { updateWindowScrollPosition } from './actions';
// import { setLeaderBoardIndex } from './actions';
// import { setCurrentlyDisplayedChunkIndex } from './actions';

import styled from 'styled-components';
// import { MargedDiv, WhiteCol } from 'components/styled/GridStyles';

// import InterstitialWrapper from 'components/styled/InterstitialWrapper';
// import HeaderMasthead from 'components/HeaderMasthead';
// import AffixedNav from 'containers/AffixedNav';
// import BigImg from './images/man.jpg';
// import Teaser from './images/teaser.jpg';
// import ArchiveTeasers from 'components/ArchiveTeasers';

import NotFoundPage from 'containers/NotFoundPage';

import SMEB from 'containers/DynamicRegions/SimpleMagicEditButton';
// import { REGULAR_CHUNKSIZE, FEATURED_CHUNKSIZE } from './constants';
import {
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import {
  selectBio, selectPosts, selectSlug, selectName,selectThumbnail, selectID, selectPageNum, selectCountUserPosts,
} from './selectors';
import { triggerLoadMoreAuthorPosts } from './actions';
import he from 'he';

// import AffixedSidebar from 'containers/AffixedSidebar';
// import ShrinkBoxVideo from 'components/ShrinkBoxVideo';
import AuthorPost from './AuthorPost';

// import SponsoredItem from 'components/SponsoredItem';
// import LeaderboardHolder from 'containers/LeaderboardHolder';
// import SmallSponsoredContentHolder from 'containers/SmallSponsoredContentHolder';
// import zmShorten from 'utils/zmShorten';
// import zmStrip from 'utils/zmStrip';
// import CatBg from './images/categorybg.jpg';
// import { clone, isEqual } from 'lodash';
import { msg } from 'utils/msg';

export class AuthorPage extends React.Component {// eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.loadMorePosts.bind(this);
  }

  loadMorePosts() {

    this.props.loadMorePosts();
  }
  render() {
    // console.log(`AuthorPage.render()`);
    let theTitle = '';
    let theContent = null;
    let theimage = null;

     const AuthorImage = styled(Image)`
      width: 100%;
      height: 300px;
     `;
     const UserImage = styled(Image)`

      width: 80%;
      display: block;
      margin-left: auto;
      margin-right: auto;

     `;
     const TextPost = styled.div`
     margin-top:50px;
     `;
     const Bio = styled.div`
     font-size: 150%;
     ${'' /* color: #444; */}
     ${'' /* padding: 0px 15px 0px 20px; */}
     margin: 7px 0 4px 0;
     color: #000;
     float: none;
     text-align:center;
     width: 100%;
     `;
     // const PostContent = styled.div`
     //   display: grid;
     //   grid-template-columns: repeat(auto-fill);
     //   grid-gap: 20px;
     //   font-size: 150%;
     //   ${'' /* color: #444; */}
     // `;

     const ButtonText = styled(Button)`
       float: right;
       color: #000;
       font-size: 19pt;
       margin: 0;
       border-bottom: 2px solid #d02e30;
       transition: 0.2s all;
       &:hover{
         text-decoration: none;
         cursor: pointer;
         color: #d02e30;
       }
       ${media.medium`
         text-align: center;
         border-bottom: none;
         width: 100%;
         color: #d02e30;
       `}
     `;
     const RedTagSm = styled(RedTagSmOnTop)`
       margin-top: 15px;
       font-size: 18px!important;
       position: absolute;
     `;

     const TitleLink = styled(Link)`
       text-decoration: none;
       color: #000;
       &:hover {
         cursor: pointer;
         color: #000;
         text-decoration: none;
       }
     `;
     const WhiteCol = styled(Col)`
       background: #fff;
       padding: 50px;
       ${media.extrasmall`
         background: none;
         padding: 0;
       `}
     `;

     const MargedDiv = styled.div`
       margin: 125px 0;
     `;

     const Heading = styled.h2`
       padding-left: 15px;
     `;
     // if(this.props.posts !== null) {
     //   theContent = this.props.posts.map((item, i) => {
     //     const someThumbnail = (
     //       <Link to={item.permalink}>
     //         <AuthorImage src={item.image.src} srcSet={item.image.srcSet} sizes={item.image.sizes}/>
     //      </Link>
     //     );
     //     const postTitle = (<TitleLink to={item.permalink}><TextPost>{he.decode(item.post_title)}</TextPost></TitleLink>);
     //     const featuredTagLink = (<RedTagSm to={typeof item.featuredTags !== 'undefined' && item.featuredTags.length > 0 ? item.featuredTags[0].permalink : null}>{typeof item.featuredTags !== 'undefined' && item.featuredTags.length > 0 ? he.decode(item.featuredTags[0].name) : null}</RedTagSm>);
     //     return (<div key={`Post_wrapper_${i}`}>{someThumbnail}{featuredTagLink}{postTitle}</div>);
     //
     //   });
     // }

     let j = 0;
     let features = [];
     let featureBoxes = [];

     if(this.props.posts !== null) {
       theContent =  this.props.posts.map((item, i) => {
        features.push(

           <Col md={5} key={`featuredSingleBoxCol_${i}`}>
             <AuthorPost
               post_title={item.post_title}
               permalink={item.permalink}
               image={item.image}
               featuredTags={item.featuredTags}
             />

           </Col>

         );

       });
   }

   features.forEach( (item, i) => {
     featureBoxes.push(item);
     j = i + 1;
     if (j % 2 == 0) {
       featureBoxes.push(
         // <Clearfix visibleMdBlock visibleLgBlock key={`clear_${i}`} />
         <Clearfix visibleSmBlock visibleMdBlock key={`clear_${i}`}/>
       );
     }
   } );

    let theDesc = '';

    let possibleLoadMoreButton = null;
    if (this.props.posts !== null && this.props.posts.length <= this.props.count_user_posts) {
      possibleLoadMoreButton = (<ButtonText     onClick={() => {
        this.loadMorePosts();
      }}>Load More</ButtonText>);
    }


    const someAuthorImage = this.props.image !== null ? (<UserImage src={this.props.image.src} srcSet={this.props.image.srcSet} size={this.props.image.size} />) : null;

    return (
      <div>
        <Helmet title={this.props.authorName}/>

        <MargedDiv>

          <Grid>
            <Row>
              <WhiteRow>
                <WhiteCol md={12}>
                  <Row>
                    <h1>{this.props.authorName}</h1>
                    <div className="thickUnderline"></div>
                    <Col md={3}>
                      {someAuthorImage}
                      <Row>
                        <Col>
                          <Bio >{this.props.bio}</Bio>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={9}>
                      <Col md={12} mdOffset={1}>
                        <Heading>Latest Posts</Heading>
                          {featureBoxes}
                      </Col>
                    </Col>
                    <Col md={12}>
                      {possibleLoadMoreButton}
                    </Col>
                  </Row>
                </WhiteCol>
              </WhiteRow>
            </Row>
          </Grid>
        </MargedDiv>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  bio: selectBio(),
  posts: selectPosts(),
  count_user_posts: selectCountUserPosts(),
  authorSlug: selectSlug(),
  authorName: selectName(),
  image: selectThumbnail(),
  id: selectID(),

  // leaderboardIndex: selectLeaderboardIndex(),
  // loading: selectLoading(),
  // error: makeSelectError(),
  // autoScrollingToPost: selectAutoScrollingToPost(),
  // storedScrollTop: selectStoredScrollTop(),
  // foundRoute: selectFoundRoute(),
  // termData: selectTermData(),
  // archiveStack: selectArchiveStack(),
  // currentlyDisplayedArchiveTitle: selectCurrentlyDisplayedArchiveTitle(),
});
// storedScrollTop
AuthorPage.defaultProps = {
  posts: null,
  count_user_posts: null,
  loading: false,
  authorSlug: null,
  authorName: null,
  image: null,

};
// but the saga is listening to the loadCategorizedPostData action, not the LOCATION_CHANGE .... is that right?
function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    // triggerCurrentlyDisplayedChunkIndex: (itemIndex) => {
    //   // console.log(`triggerCurrentlyDisplayedChunkIndex(${itemIndex})`);
    //   return dispatch(setCurrentlyDisplayedChunkIndex(itemIndex));
    // },

    loadMorePosts: () => {
      msg(`loadMorePosts()`);

      return dispatch(triggerLoadMoreAuthorPosts());
    },
    dispatch,
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'authorPage', reducer });
const withSaga = injectSaga({ key: 'authorPage', saga, mode: RESTART_ON_REMOUNT });

export default {
  component: compose(
    withReducer,
    withSaga,
    withConnect,
  )(AuthorPage),
};
