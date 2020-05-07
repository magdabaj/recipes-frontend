import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';

import { fetchAllTags } from '../../utils/api/tags';
import {
    loadRecipesByTagError,
    loadRecipesByTagSuccess,
    loadRecipesError,
    loadRecipesSuccess,
    loadTagsError,
    loadTagsSuccess,
} from './actions';
import { LOAD_RECIPES, LOAD_RECIPES_BY_TAG, LOAD_TAGS } from './constants';
import { fetchAllRecipes, fetchRecipesByTag } from '../../utils/api/recipe';

export function* loadTagsSaga() {
    try {
        const tags = yield call(fetchAllTags);
        yield put(loadTagsSuccess(tags));
    } catch (error) {
        yield put(loadTagsError(error.message));
    }
}

export function* watchTagsLoad() {
    yield takeLatest(LOAD_TAGS, loadTagsSaga);
}

export function* loadRecipesSaga(action) {
    const { page } = action;
    try {
        const response = yield call(fetchAllRecipes, page);
        yield put(loadRecipesSuccess(response));
    } catch (error) {
        yield put(loadRecipesError(error.message));
    }
}

export function* watchRecipesLoad() {
    yield takeLatest(LOAD_RECIPES, loadRecipesSaga);
}

export function* loadRecipesByTagSaga(action) {
    const { tagId, page } = action;

    try {
        const response = yield call(fetchRecipesByTag, tagId, page);
        yield put(loadRecipesByTagSuccess(response));
    } catch (e) {
        yield put(loadRecipesByTagError(e.message));
    }
}

export function* watchRecipesByTagLoad() {
    yield takeLatest(LOAD_RECIPES_BY_TAG, loadRecipesByTagSaga);
}

// // Individual exports for testing
// export default function* recipesHomePageSaga() {
//     yield all([watchTagsLoad(), watchRecipesLoad(), watchRecipesByTagLoad()]);
// }
