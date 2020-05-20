import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginFormContainer state domain
 */

const selectLoginFormContainerDomain = state => state.loginContainerReducer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginFormContainer
 */

const makeSelectLoginFormContainer = () =>
    createSelector(
        selectLoginFormContainerDomain,
        substate => substate,
    );

const makeSelectUser = () =>
    createSelector(
        selectLoginFormContainerDomain,
        substate => substate.user,
    );

const makeSelectError = () =>
    createSelector(
        selectLoginFormContainerDomain,
        substate => substate.user.error,
    )

const makeSelectStatus = () =>
    createSelector(
        selectLoginFormContainerDomain,
        substate => substate.user.status,
    )

const makeSelectLogoutStatus = () =>
    createSelector(
        selectLoginFormContainerDomain,
        substate => substate.user.logoutStatus,
    )

export default makeSelectLoginFormContainer;
export { selectLoginFormContainerDomain, makeSelectUser, makeSelectError, makeSelectStatus, makeSelectLogoutStatus };
