import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_USER_RECIPES, DELETE_RECIPE } from './constants';
import { deleteRecipe, fetchUserRecipes } from '../../utils/api/recipe';
import {
    deleteRecipeError,
    deleteRecipeSuccess,
    loadUserRecipesError,
    loadUserRecipesSuccess,
} from './actions';
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

export function* handleRecipeDelete(action) {
    const { recipeId } = action;
    const { userId } = yield select(makeSelectUser());

    try {
        yield call(deleteRecipe, recipeId, userId);
        yield put(deleteRecipeSuccess(recipeId));
    } catch (e) {
        yield put(deleteRecipeError(e.message));
    }
}

export function* watchRecipeDelete() {
    yield takeLatest(DELETE_RECIPE, handleRecipeDelete);
}
