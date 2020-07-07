import { createSelector } from 'reselect';
import { initialState } from './reducer';
/**
 * Direct selector to the userRecipesContainer state domain
 */

const selectUserRecipesContainerDomain = state => state.userRecipesContainerReducer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserRecipesContainer
 */

const selectRecipesContainerPaging = (state, props) => props.match.params.page;

const selectPage = () =>
    createSelector(
        makeSelectUserRecipesContainer(),
        selectRecipesContainerPaging,
        (homeState, pageRoute) => (pageRoute ? pageRoute : homeState.page),
    );

const makeSelectUserRecipesContainer = () =>
    createSelector(
        selectUserRecipesContainerDomain,
        substate => substate,
    );

const makeSelectUserRecipes = () =>
    createSelector(
        selectUserRecipesContainerDomain,
        substate => substate.recipes,
    );

const makeSelectTotalPages = () =>
    createSelector(
        selectUserRecipesContainerDomain,
        substate => substate.totalPages,
    );

const makeSelectNextPage = () =>
    createSelector(
        selectUserRecipesContainerDomain,
        substate => substate.nextPage,
    );

const makeSelectPreviousPage = () =>
    createSelector(
        selectUserRecipesContainerDomain,
        substate => substate.previousPage,
    );

const makeSelectDeletingRecipe = () =>
    createSelector(
        selectUserRecipesContainerDomain,
        substate => substate.deletingRecipe,
    );

const makeSelectDeleteRecipeError = () =>
    createSelector(
        selectUserRecipesContainerDomain,
        substate => substate.deleteRecipeError,
    );

const makeSelectStatus = () =>
    createSelector(
        selectUserRecipesContainerDomain,
        substate => substate.status,
    );

const makeSelectTags = () =>
    createSelector(
        selectUserRecipesContainerDomain,
        substate => substate.tags,
    )

export default makeSelectUserRecipesContainer;
export {
    selectUserRecipesContainerDomain,
    makeSelectUserRecipes,
    selectPage,
    makeSelectTotalPages,
    makeSelectNextPage,
    makeSelectPreviousPage,
    makeSelectDeleteRecipeError,
    makeSelectDeletingRecipe,
    makeSelectStatus,
    makeSelectTags,
};
