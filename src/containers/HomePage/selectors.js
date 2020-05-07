import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the recipesHomePage state domain
 */

const selectRecipesHomePageDomain = state => state.recipesHomePage || initialState;

const selectHomePageRoute = (state, props) => props.match.params.tagId;

const selectTagId = () =>
    createSelector(
        selectHomePageRoute,
        tagId => tagId,
    );

const selectHomePagePaging = (state, props) => props.match.params.page;

const selectPage = () =>
    createSelector(
        makeSelectRecipesHomePage(),
        selectHomePagePaging,
        (homeState, pageRoute) => (pageRoute ? pageRoute : homeState.page),
    );

/**
 * Other specific selectors
 */

/**
 * Default selector used by RecipesHomePage
 */

const makeSelectRecipesHomePage = () =>
    createSelector(
        selectRecipesHomePageDomain,
        substate => substate,
    );

const makeSelectRecipes = () =>
    createSelector(
        selectRecipesHomePageDomain,
        substate => substate.recipes,
    );

const makeSelectTags = () =>
    createSelector(
        selectRecipesHomePageDomain,
        substate => substate.tags,
    );

const makeSelectTotalPages = () =>
    createSelector(
        selectRecipesHomePageDomain,
        substate => substate.totalPages,
    );

const makeSelectNextPage = () =>
    createSelector(
        selectRecipesHomePageDomain,
        substate => substate.nextPage,
    );

const makeSelectPreviousPage = () =>
    createSelector(
        selectRecipesHomePageDomain,
        substate => substate.previousPage,
    );

const makeSelectStatus = () =>
    createSelector(
        selectRecipesHomePageDomain,
        substate => substate.status,
    );

export default makeSelectRecipesHomePage;
export {
    selectRecipesHomePageDomain,
    makeSelectTags,
    makeSelectRecipes,
    selectTagId,
    selectPage,
    makeSelectPreviousPage,
    makeSelectTotalPages,
    makeSelectNextPage,
    makeSelectStatus,
};
