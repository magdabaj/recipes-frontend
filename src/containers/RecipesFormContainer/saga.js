import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_RECIPE } from './constants';
import { editRecipe, storeRecipe } from '../../utils/api/recipe';
import {addRecipeError, addRecipeSuccess, changeStatus} from './actions';

export function* addRecipeSaga(action) {
    const { title, url, website, image, tagId, id } = action.recipe.recipe;
    const { userId } = action.recipe;

    try {
        let json;
        if (id) json = yield call(editRecipe, title, url, website, image, tagId, userId, id);
        else json = yield call(storeRecipe, title, url, website, image, tagId, userId);

        if (json.type === 'error') {
            yield put(addRecipeError(json.message));
            yield put(changeStatus());
        } else {
            yield put(addRecipeSuccess(json.message));
            yield put(changeStatus());
        }
    } catch (e) {
        yield put(addRecipeError(e.message));
    }
}

export function* watchRecipeAdd() {
    yield takeLatest(ADD_RECIPE, addRecipeSaga);
}