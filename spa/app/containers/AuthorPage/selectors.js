import { createSelector } from 'reselect';

/**
 * Direct selectors to the singlePosts state stuff
 */

const selectAuthor = () => (state) => {
  return state.get('authorPage').toJS();
}

const selectBio = () => createSelector(
  selectAuthor(),
  (authorPage) => {
    return authorPage.bio;
  }
);

const selectPosts = () => createSelector(
  selectAuthor(),
  (authorPage) => {
    return authorPage.posts;
  }
);

const selectLoading = () => createSelector(
  selectAuthor(),
  (authorPage) => {
    return authorPage.loading;
  }
);

const selectSlug = () => createSelector(
  selectAuthor(),
  (authorPage) => {
    return authorPage.authorSlug;
  }
);
const selectName = () => createSelector(
  selectAuthor(),
  (authorPage) => {
    return authorPage.authorName;
  }
);

const selectThumbnail = () => createSelector(
  selectAuthor(),
  (authorPage) => {
    return authorPage.image;
  }
);

const selectID = () => createSelector(
  selectAuthor(),
  (authorPage) => {
    return authorPage.id;
  }
);

const selectCountUserPosts = () => createSelector(
  selectAuthor(),
  (authorPage) => {
    return authorPage.count_user_posts;
  }
);
// chunkIndex


export default selectAuthor;
export {
  selectBio, selectPosts, selectSlug, selectName, selectThumbnail, selectID, selectLoading, selectCountUserPosts,
};
