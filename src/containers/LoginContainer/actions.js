/*
 *
 * LoginFormContainer actions
 *
 */

import {
    AUTHENTICATE,
    AUTHENTICATE_ERROR,
    AUTHENTICATE_SUCCESS, SET_ERROR,
    SIGN_IN,
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS,
    SIGN_OUT,
    SIGN_OUT_ERROR,
    SIGN_OUT_SUCCESS,
    SIGN_UP_USER,
    SIGN_UP_USER_ERROR,
    SIGN_UP_USER_SUCCESS
} from './constants'

export const setError = () => ({
    type: SET_ERROR
})

export const signUp = ({ email, password }) => ({
    type: SIGN_UP_USER,
    email,
    password,
});

export const signUpSuccess = (json, email) => ({
    type: SIGN_UP_USER_SUCCESS,
    ...json,
    email,
});

export const signUpError = error => ({
    type: SIGN_UP_USER_ERROR,
    error,
});

export const signOut = () => ({
    type: SIGN_OUT,
});

export const signOutError = error => ({
    type: SIGN_OUT_ERROR,
    error,
});

export const signOutSuccess = json => ({
    type: SIGN_OUT_SUCCESS,
    ...json,
});

export const signIn = ({ email, password }) => ({
    type: SIGN_IN,
    email,
    password,
});

export const signInSuccess = (json, email) => ({
    type: SIGN_IN_SUCCESS,
    ...json,
    email,
});

export const signInError = error => ({
    type: SIGN_IN_ERROR,
    error,
});

export const authenticate = () => ({
    type: AUTHENTICATE,
});

export const authenticateSuccess = json => ({
    type: AUTHENTICATE_SUCCESS,
    ...json,
});

export const authenticateError = error => ({
    type: AUTHENTICATE_ERROR,
    error,
});
