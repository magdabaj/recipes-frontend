import { call, put, takeLatest } from 'redux-saga/effects';
import { AUTHENTICATE, SIGN_IN, SIGN_OUT, SIGN_UP_USER } from './constants';
import { signInUser, signUpUser, signOutUser, authenticateUser } from '../../utils/api/user';
import {
    authenticateError,
    authenticateSuccess, clearLogoutStatus, clearStatus,
    signInError,
    signInSuccess,
    signOutError,
    signOutSuccess,
    signUpError,
    signUpSuccess,
} from './actions';

export function* handleSignUp(action) {
    const { email, password } = action;
    try {
        const json = yield call(signUpUser, email, password);
        if (json.type === 'error') {
            yield put(signUpError(json.message));
            yield put(clearStatus());
        } else {
            yield put(signUpSuccess(json, email));
            yield put(clearStatus());
        }
    } catch (e) {
        yield put(signUpError(e.message));
        yield put(clearStatus());
    }
}

export function* watchSignUp() {
    yield takeLatest(SIGN_UP_USER, handleSignUp);
}

export function* handleSignIn(action) {
    const { email, password } = action;
    try {
        const json = yield call(signInUser, email, password);
        if (json.type === 'error') {
            yield put(signInError(json.message));
            yield put(clearStatus());
        } else {
            yield put(signInSuccess(json, email));
            yield put(clearStatus())
        }
    } catch (e) {
        yield put(signInError(e.message));
    }
}

export function* watchSignIn() {
    yield takeLatest(SIGN_IN, handleSignIn);
}

export function* handleSignOut() {
    try {
        const json = yield call(signOutUser);
        if (json.type === 'error') {
            yield put(signOutError(json.message));
            yield put(clearLogoutStatus());
        } else {
            yield put(signOutSuccess(json));
            yield put(clearLogoutStatus());
        }
    } catch (e) {
        yield put(signOutSuccess(e.message));
        yield put(clearLogoutStatus());
    }
}

export function* watchSignOut() {
    yield takeLatest(SIGN_OUT, handleSignOut);
}

export function* handleAuthenticate() {
    try {
        const json = yield call(authenticateUser);
        if (json.type === 'error') {
            yield put(authenticateError(json.message));
        } else {
            yield put(authenticateSuccess(json));
            yield put(clearStatus());
        }
    } catch (e) {
        yield put(authenticateError(e.message));
        yield put(clearStatus());
    }
}

export function* watchAuthenticate() {
    yield takeLatest(AUTHENTICATE, handleAuthenticate);
}
