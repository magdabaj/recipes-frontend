import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { createRating, fetchRecipeRatings } from '../../utils/api/rating';
import {
    getRecipeError,
    getRecipeRatingsError,
    getRecipeRatingsSuccess,
    getRecipeSuccess,
    sendRatingSuccess,
    sendRatingError,
    getCommentsError,
    getCommentsSuccess,
    addCommentError,
    addCommentSuccess,
    getComments,
    removeCommentSuccess,
    removeCommentError, clearStatus,
} from './actions';
import {
    ADD_COMMENT,
    GET_COMMENTS,
    GET_RATINGS,
    GET_RECIPE,
    REMOVE_COMMENT,
    SEND_RATING,
} from './constants';
import { fetchRecipe } from '../../utils/api/recipe';
import { deleteComment, fetchComments, storeComment } from '../../utils/api/comment';
import { makeSelectUser } from '../LoginContainer/selectors';

export function* handleRecipeRatingsLoad(action) {
    const { recipeId } = action;

    try {
        const { message, ratingsMean } = yield call(fetchRecipeRatings, recipeId);
        yield put(getRecipeRatingsSuccess(message, recipeId, ratingsMean));
    } catch (e) {
        yield put(getRecipeRatingsError(e.message));
    }
}

export function* watchRecipeRatingsLoad() {
    yield takeLatest(GET_RATINGS, handleRecipeRatingsLoad);
}

export function* handleRatingSend(action) {
    const { rate, userId, recipeId } = action;
    try {
        const json = yield call(createRating, rate, userId, recipeId);
        if (json.type === 'error') {
            yield put(sendRatingError(json.message));
        } else {
            yield put(sendRatingSuccess(json, recipeId, json.ratingsMean));
        }
    } catch (e) {
        yield put(sendRatingError(e.message));
    }
}

export function* watchRatingSend() {
    yield takeLatest(SEND_RATING, handleRatingSend);
}

function* handleRecipeLoad(action) {
    const { recipeId } = action;
    try {
        const recipe = yield call(fetchRecipe, recipeId);
        yield put(getRecipeSuccess(recipe));
    } catch (e) {
        yield put(getRecipeError(e.message));
    }
}

export function* watchRecipeLoad() {
    yield takeLatest(GET_RECIPE, handleRecipeLoad);
}

export function* loadCommentsSaga({ recipeId }) {
    try {
        const comments = yield call(fetchComments, recipeId);
        yield put(getCommentsSuccess(comments));
    } catch (e) {
        yield put(getCommentsError(e.message));
    }
}

export function* watchCommentsLoad() {
    yield takeLatest(GET_COMMENTS, loadCommentsSaga);
}

export function* addCommentSaga({ recipeId }) {
    const { userId } = yield select(makeSelectUser());
    try {
        const message = yield call(storeComment, recipeId.recipeId, recipeId.content, userId);
        yield put(addCommentSuccess(message));
        yield put(clearStatus());
    } catch (e) {
        yield put(addCommentError(e.message));
        yield put(clearStatus());
    }
}

export function* watchCommentAdd() {
    yield takeLatest(ADD_COMMENT, addCommentSaga);
}

export function* deleteCommentSaga(action) {
    const { commentId } = action;
    const { userId } = yield select(makeSelectUser());

    try {
        const message = yield call(deleteComment, commentId, userId);
        yield put(removeCommentSuccess(message));
        yield put(clearStatus());
    } catch (e) {
        yield put(removeCommentError(e.message));
        yield put(clearStatus());
    }
}

export function* watchCommentDelete() {
    yield takeLatest(REMOVE_COMMENT, deleteCommentSaga);
}

