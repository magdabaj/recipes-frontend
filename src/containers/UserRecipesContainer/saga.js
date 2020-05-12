import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import { LOAD_USER_RECIPES, DELETE_RECIPE, LOAD_TAGS } from './constants';
import { deleteRecipe, fetchUserRecipes } from '../../utils/api/recipe';
import {
    deleteRecipeError,
    deleteRecipeSuccess,
    loadUserRecipesError,
    loadUserRecipesSuccess,
    loadTagsError, loadTagsSuccess
} from './actions';
import { fetchAllTags } from '../../utils/api/tags';
import { selectUserId } from '../RecipesFormContainer/selectors';
import { makeSelectUser } from '../LoginContainer/selectors';

export function* handleUserRecipesLoad(action) {
    const { email, page } = action;
    try {
        const response = yield call(fetchUserRecipes, email, page);
        yield put(loadUserRecipesSuccess(response));
    } catch (error) {
        yield put(loadUserRecipesError(error.message));
    }
}

export function* watchUserRecipesLoad() {
    yield takeLatest(LOAD_USER_RECIPES, handleUserRecipesLoad);
}

export function* loadTagsSaga() {
    try {
        const tags = yield call(fetchAllTags);
        yield put(loadTagsSuccess(tags));
    } catch (error) {
        yield put(loadTagsError(error.message));
    }
}

export function* watchUserTagsLoad() {
    yield takeLatest(LOAD_TAGS, loadTagsSaga);
}

export function* handleRecipeDelete(action) {
    const { recipeId } = action;
    const { userId } = yield select(makeSelectUser());

    try {
        const json = yield call(deleteRecipe, recipeId, userId);
        yield put(deleteRecipeSuccess(recipeId));
    } catch (e) {
        yield put(deleteRecipeError(e.message));
    }
}

export function* watchRecipeDelete() {
    yield takeLatest(DELETE_RECIPE, handleRecipeDelete);
}

// Individual exports for testing

