import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the recipeContainer state domain
 */

const selectRecipeContainerDomain = state => state.recipeContainerReducer || initialState;

const selectRecipeIdRoute = (state, props) => props.match.params.recipeId;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RecipeContainer
 */

const selectSlug = () =>
    createSelector(
        selectRecipeIdRoute,
        recipeId => recipeId,
    );

const makeSelectRecipeContainer = () =>
    createSelector(
        selectRecipeContainerDomain,
        substate => substate,
    );

const makeSelectRecipe = () =>
    createSelector(
        selectRecipeContainerDomain,
        substate => substate.recipe,
    );

const makeSelectRatingsMean = () =>
    createSelector(
        selectRecipeContainerDomain,
        substate => substate.ratingsMean,
    );

const makeSelectGetRatingsStatus = () =>
    createSelector(
        selectRecipeContainerDomain,
        substate => substate.getRatingsStatus,
    );

const makeSelectComments = () =>
    createSelector(
        selectRecipeContainerDomain,
        substate => substate.comments,
    );

const makeSelectAddCommentStatus = () =>
    createSelector(
        selectRecipeContainerDomain,
        substate => substate.addCommentStatus,
    );

const makeSelectDeleteCommentStatus = () =>
    createSelector(
        selectRecipeContainerDomain,
        substate => substate.deleteCommentStatus,
    );

const makeSelectAddCommentError = () =>
    createSelector(
        selectRecipeContainerDomain,
        substate => substate.commentsError,
    );

const makeSelectCommentsNumber = () =>
    createSelector(
        selectRecipeContainerDomain,
        substate => substate.commentsNumber,
    );

const makeSelectStatus = () =>
    createSelector(
        selectRecipeContainerDomain,
        substate => substate.status,
    );

const makeSelectSendRatingStatus = () =>
    createSelector(
        selectRecipeContainerDomain,
        substate => substate.sendRatingStatus,
    );

export default makeSelectRecipeContainer;
export {
    selectRecipeContainerDomain,
    makeSelectRatingsMean,
    makeSelectRecipe,
    makeSelectGetRatingsStatus,
    selectSlug,
    makeSelectComments,
    makeSelectAddCommentError,
    makeSelectCommentsNumber,
    makeSelectStatus,
    makeSelectDeleteCommentStatus,
    makeSelectAddCommentStatus,
    makeSelectSendRatingStatus,
};
