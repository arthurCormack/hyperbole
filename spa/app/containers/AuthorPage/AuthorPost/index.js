import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image, Col } from 'react-bootstrap';
import { media } from 'style-utils';
// import PostThumb from './images/postThumb1.jpg';
import he from 'he';
import { RedTagSmOnTop } from 'components/styled/Common';
// import { push } from 'react-router-redux';

class AuthorPost extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const PostTeaser = styled.div`
      margin: 0;
      color: #000;
      float:left;
      width: 100%;
      margin-bottom: 40px;
      ${media.medium`
        margin-bottom: 40px;
      `}
      ${media.small`
        margin-bottom: 40px;
        margin-top: 40px;
      `}
      ${media.small`
        margin-bottom: 40px;
        margin-top: 0;
      `}
      `;

    const PostTeaserH3 = styled.h3`
      margin: 7px 0 4px 0;
      color: #000;
      float: left;
      width: 100%;
      ${media.small`
        text-align:center;
        margin: 7px 0 4px 0;
        color: #000;
        float: none;
        margin: 6px auto;
      `}
      &:hover {
        cursor: pointer;
      }
    `;

    const FlexiblePostTeaser = styled.div`
        margin: 10px 0;
        color: #000;
        float: left;
        width: 100%;
        ${media.large`
          width: 185px;
        `}
        ${media.medium`
          width: 325px;
        `}
        ${media.small`
          width: 100%;
        `}
        ${media.extrasmall`
            float: left;
        `}
      `;

    const FlexPostTeaserH3 = styled.h3`
      margin: 10px 0;
      color: #000;
      float: left;
      width: 100%;
      ${media.large`
        font-size: 1.4em;
      `}
      ${media.medium`
        font-size: 1.6em;
      `}
      ${media.small`
        text-align:center;
      `}
      &:hover {
        cursor: pointer;
      }
    `;
    const FullImage = styled(Image)`
      float: left;
      width: 100%;
    `;
    const RedTagSm = styled(Link)`
    color: #d02d2f;
    font-family: 'Roboto Condensed', sans-serif;
    -webkit-text-transform: uppercase;
    -webkit-text-transform: uppercase;
    text-transform: uppercase;
    ${'' /* font-size: 1.1em; */}
    display: block;
    margin: 7px 0 -9px;
    font-weight: bold;
      ${media.small`
        text-align:center;
      `}
      ${media.extrasmall`
        margin-bottom: 0px;
        float: left;
        width: 100%;
      `}
      &:hover {
        cursor: pointer;
        color: #d02d2f;
        text-decoration: none;
      }

    `;

    const MinHeightLink = styled(Link)`
      display: block;
      min-height: 220px;
    `;

    let postTeaser = null;
    let theCat = '';

    if (typeof this.props.featuredTags == 'string') {
      theCat = he.decode(this.props.featuredTags);
    }
    const featuredTagLink =
    (<RedTagSmOnTop to={typeof this.props.featuredTags !== 'undefined' && this.props.featuredTags.length > 0 ? this.props.featuredTags[0].permalink : null}>{typeof this.props.featuredTags !== 'undefined' && this.props.featuredTags.length > 0 ? he.decode(this.props.featuredTags[0].name) : null}
    </RedTagSmOnTop>);

      postTeaser = (

          <PostTeaser>
            <Link to={this.props.permalink} className="full">
              {/* <Image src={this.props.image.src} srcSet={this.props.image.srcSet} sizes={this.props.image.sizes} className="full" /> */}
              <Image src={this.props.image.src} className="full" />
            </Link>
            {featuredTagLink}
            <Link to={this.props.permalink} className="full">
              <PostTeaserH3>{he.decode(this.props.post_title)}</PostTeaserH3>
            </Link>
          </PostTeaser>
      );


    return (
      <div>{postTeaser}</div>
    );

  }
}

AuthorPost.propTypes = {

};

export default AuthorPost;
