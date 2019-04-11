// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc

import App from 'containers/App';
import HomePage from 'containers/HomePage';
// import SinglePostPage from 'containers/SinglePostPage';
// import SinglePage from 'containers/SinglePage';
// import ArchivePage from 'containers/ArchivePage';
// import AuthorPage from 'containers/AuthorPage';
// import DefaultPage from 'containers/DefaultPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage, // this will provide both component and loader params
        path: '/',
        exact: true,
      },
      // {
      //   ...AuthorPage,
      //   path: '/author/:authorSlug',
      // },
      // {
      //   ...DefaultPage,
      //   path: '/(faq|supportpage|italy|about|auto-renewal|privacy-policy|advertise-with-us|contact-us|zoomer-magazine-mailing-schedule|terms-of-service|zoomerapp|vancouver-zoomershow/)',
      // },
      // {
      //   ...SinglePostPage,
      //   path: '/:categorySlug/:secondaryCategorySlug/:tertiaryCategorySlug/:yearSlug/:monthSlug/:daySlug/:postSlug',
      // },
      // {
      //   ...SinglePostPage,
      //   path: '/:categorySlug/:secondaryCategorySlug/:yearSlug/:monthSlug/:daySlug/:postSlug',
      // },
      // {
      //   ...SinglePostPage,
      //   path: '/:categorySlug/:yearSlug/:monthSlug/:daySlug/:postSlug',
      // },
      // {
      //   ...ArchivePage,
      //   path: '/:categorySlug/:secondaryCategorySlug/:tertiaryCategorySlug/page/:pageNum',
      // },
      // {
      //   ...ArchivePage,
      //   path: '/:categorySlug/:secondaryCategorySlug/page/:pageNum',
      // },
      // {
      //   ...ArchivePage,
      //   path: '/:categorySlug/page/:pageNum',
      // },
      // {
      //   ...ArchivePage,
      //   path: '/:categorySlug/:secondaryCategorySlug/:tertiaryCategorySlug',
      // },
      // {
      //   ...ArchivePage,
      //   path: '/:categorySlug/:secondaryCategorySlug',
      // },
      // {
      //   ...ArchivePage,
      //   path: '/:categorySlug',
      // },
    ],
  },
];
