import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the recipesHomePage state domain
 */

const selectAppDomain = state => state.appReducer || initialState;

// const selectAppRoute = (state, props) => props.match.params.tagId;
//
// const selectTagId = () =>
//     createSelector(
//         selectAppRoute,
//         tagId => tagId,
//     );
//
// const selectHomePagePaging = (state, props) => props.match.params.page;
//
// const selectPage = () =>
//     createSelector(
//         makeSelectRecipesHomePage(),
//         selectHomePagePaging,
//         (homeState, pageRoute) => (pageRoute ? pageRoute : homeState.page),
//     );

/**
 * Other specific selectors
 */

/**
 * Default selector used by RecipesHomePage
 */

const makeSelectApp = () =>
    createSelector(
        selectAppDomain,
        substate => substate,
    );

// const makeSelectRecipes = () =>
//     createSelector(
//         selectRecipesHomePageDomain,
//         substate => substate.recipes,
//     );

const makeSelectTags = () =>
    createSelector(
        selectAppDomain,
        substate => substate.tags,
    );

// const makeSelectTotalPages = () =>
//     createSelector(
//         selectRecipesHomePageDomain,
//         substate => substate.totalPages,
//     );
//
// const makeSelectNextPage = () =>
//     createSelector(
//         selectRecipesHomePageDomain,
//         substate => substate.nextPage,
//     );
//
// const makeSelectPreviousPage = () =>
//     createSelector(
//         selectRecipesHomePageDomain,
//         substate => substate.previousPage,
//     );
//
// const makeSelectStatus = () =>
//     createSelector(
//         selectRecipesHomePageDomain,
//         substate => substate.status,
//     );

export default makeSelectApp;
export {
    makeSelectTags
};
