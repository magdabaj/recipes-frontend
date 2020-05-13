import {call, put, takeLatest} from "redux-saga/effects";
import {fetchAllTags} from "../../utils/api/tags";
import {loadTagsError, loadTagsSuccess} from "./actions";
import {LOAD_TAGS} from "./constants";

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