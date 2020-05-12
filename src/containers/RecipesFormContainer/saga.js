import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';
import { ADD_RECIPE, CANCEL, DELETE_RECIPE } from './constants';
import { goBack } from 'react-router-redux';
import { editRecipe, storeRecipe } from '../../utils/api/recipe';
import { addRecipeError, addRecipeSuccess } from './actions';
import { fetchAllTags } from '../../utils/api/tags';
import { loadTagsError, loadTagsSuccess } from './actions';
import { LOAD_TAGS } from './constants';
import { selectUserId } from './selectors';

export function* addRecipeSaga(action) {
    const { title, url, website, image, tagId, id } = action.recipe.recipe;
    const { userId } = action.recipe;

    try {
        let json;
        if (id) json = yield call(editRecipe, title, url, website, image, tagId, userId, id);
        else json = yield call(storeRecipe, title, url, website, image, tagId, userId);

        if (json.type === 'error') {
            yield put(addRecipeError(json.message));
        } else {
            yield put(addRecipeSuccess(json.message));
            yield put(goBack());
        }
    } catch (e) {
        yield put(addRecipeError(e.message));
    }
}

export function* watchRecipeAdd() {
    yield takeLatest(ADD_RECIPE, addRecipeSaga);
}

export function* handleDoneSaga() {
    yield put(goBack());
}

export function* watchAddCancel() {
    yield takeLatest(CANCEL, handleDoneSaga);
}

export function* loadTagsSaga() {
    try {
        const tags = yield call(fetchAllTags);
        yield put(loadTagsSuccess(tags));
    } catch (error) {
        yield put(loadTagsError(error.message));
    }
}

export function* watchRecipeFormTagsLoad() {
    yield takeLatest(LOAD_TAGS, loadTagsSaga);
}

