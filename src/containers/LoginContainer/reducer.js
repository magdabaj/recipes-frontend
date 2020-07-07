/*
 *
 * LoginFormContainer reducer
 *
 */
import produce from 'immer';
import {
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR,
    SIGN_OUT,
    SIGN_IN,
    SIGN_UP_USER_ERROR,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    AUTHENTICATE,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_ERROR, CLEAR_STATUS, CLEAR_LOGOUT_STATUS
} from './constants'
import fetchStates from '../../utils/fetchStates';

// todo edit login form styles
// todo edit comment
// todo add props
// todo add tests
// todo order css files and styled components
// todo restore password functionality
// todo different hash

export const initialState = {
    user: {
        loggedIn: false,
        error: null,
        email: '',
        userId: null,
        status: null,
        logoutStatus: null,
    },
};

/* eslint-disable default-case, no-param-reassign */
const loginContainerReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case SIGN_UP_USER:
                // check if correct
                draft.user.status = fetchStates.fetching;
                draft.user.error = null;
                break;
            case SIGN_UP_USER_ERROR:
                draft.user.status = fetchStates.error;
                draft.user.error = action.error;
                break;
            case SIGN_UP_USER_SUCCESS:
                draft.user.status = fetchStates.success;
                draft.user.error = null;
                draft.user.loggedIn = true;
                draft.user.message = action.message;
                draft.user.email = action.email;
                draft.user.userId = action.userId;
                break;
            case SIGN_IN:
                draft.user.status = fetchStates.fetching;
                draft.user.error = null;
                break;
            case SIGN_IN_ERROR:
                draft.user.status = fetchStates.error;
                draft.user.error = action.error;
                break;
            case SIGN_IN_SUCCESS:
                draft.user.status = fetchStates.success;
                draft.user.error = null;
                draft.user.loggedIn = true;
                draft.user.message = action.message;
                draft.user.email = action.email;
                draft.user.userId = action.userId;
                break;
            case SIGN_OUT:
                draft.user.logoutStatus = fetchStates.fetching;
                break;
            case SIGN_OUT_SUCCESS:
                draft.user.logoutStatus = fetchStates.success;
                draft.user.loggedIn = false;
                draft.user.message = action.message;
                draft.user.email = '';
                draft.user.userId = '';
                break;
            case SIGN_OUT_ERROR:
                draft.user.logoutStatus = fetchStates.error;
                draft.user.error = action.error;
                break;
            case AUTHENTICATE:
                // draft.user.status = fetchStates.fetching;
                break;
            case AUTHENTICATE_SUCCESS:
                // draft.user.status = fetchStates.success;
                draft.user.loggedIn = action.authenticated;
                draft.user.message = action.message;
                draft.user.email = action.email;
                draft.user.userId = action.userId;
                break;
            case AUTHENTICATE_ERROR:
                // draft.user.status = fetchStates.error;
                draft.user.error = action.error;
                break;
            case CLEAR_STATUS:
                draft.user.status = null;
                break;
            case CLEAR_LOGOUT_STATUS:
                draft.user.logoutStatus = null;
                break;
        }
    });

export default loginContainerReducer;
