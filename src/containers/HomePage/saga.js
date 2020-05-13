import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';
import {
    loadRecipesByTagError,
    loadRecipesByTagSuccess,
    loadRecipesError,
    loadRecipesSuccess,
} from './actions';
import { LOAD_RECIPES, LOAD_RECIPES_BY_TAG } from './constants';
import { fetchAllRecipes, fetchRecipesByTag } from '../../utils/api/recipe';

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