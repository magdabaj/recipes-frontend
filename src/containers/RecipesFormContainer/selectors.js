import { createSelector } from 'reselect';
import { initialState } from './reducer';
import makeSelectUserRecipesContainer from '../UserRecipesContainer/selectors';

/**
 * Direct selector to the recipesFormContainer state domain
 */

const selectRecipesFormContainerDomain = state => state.recipesFormContainer || initialState;

const selectUserIdRoute = (state, props) => props.match.params.userId;

const selectRecipeIdRoute = (state, props) => props.match.params.recipeId;

const selectRecipeId = () =>
    createSelector(
        makeSelectRecipesFormContainer(),
        selectRecipeIdRoute,
        (homeState, recipeRoute) => (recipeRoute ? recipeRoute : homeState.recipeId),
    );

/**
 * Other specific selectors
 */

/**
 * Default selector used by RecipesFormContainer
 */

const selectUserId = () =>
    createSelector(
        selectUserIdRoute,
        userId => userId,
    );

const makeSelectRecipesFormContainer = () =>
    createSelector(
        selectRecipesFormContainerDomain,
        substate => substate,
    );

const makeSelectRecipesAddStatus = () =>
    createSelector(
        selectRecipesFormContainerDomain,
        substate => substate.status,
    );

const makeSelectTags = () =>
    createSelector(
        selectRecipesFormContainerDomain,
        substate => substate.tags,
    );

export default makeSelectRecipesFormContainer;
export {
    selectRecipesFormContainerDomain,
    selectUserId,
    makeSelectRecipesAddStatus,
    makeSelectTags,
    selectRecipeId,
};
