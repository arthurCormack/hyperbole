/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { combineReducers } from 'redux';

/**
 * 
 * what is the dickens is this caardd thing anyways?
 * CAARDD = Content Authority Api Response Dead-Drop
 * The idea is that there is this Content Authority, which is an API, and that it has the content that gets loaded into this app.
 * we request that content by calling various API endpoints, with parameters gleaned from the URL path, and the Content Authority respondes with the content.
 * Or, if it does not find the content we are looking for, 
 * if it finds the content at a different address, it can give us a redirect to the correct place where that content lives (we then 301 direct there), 
 * or indicate that it is not found, we 404.
 * the caardd is used to help set the correct http code in the server response
 * So, what are the actions that could result in setting things in the caardd?
 * Well, in this case, we are assuming that the Content Authority is a wordpress json api, and that we are requesting either a post, an archive (category or tag), or a page.
 * (permalink structure.)
 */
const initialCAARDDState = false;
const caardd = (state = initialCAARDDState, action) =>
  produce(state, draft => {
    switch (action.type) {

    }
  });

export const initialState = {
  caardd: false,
};

const appReducer = combineReducers({
  caardd,
});

export default appReducer;
