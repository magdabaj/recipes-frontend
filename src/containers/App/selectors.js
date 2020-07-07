import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the recipesHomePage state domain
 */

const selectAppDomain = state => state.appReducer || initialState;

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

const makeSelectTags = () =>
    createSelector(
        selectAppDomain,
        substate => substate.tags,
    );

export default makeSelectApp;
export {
    makeSelectTags,
    selectAppDomain,
};
