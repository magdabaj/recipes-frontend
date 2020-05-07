import { all } from 'redux-saga/effects';
import { watchRecipesByTagLoad, watchRecipesLoad, watchTagsLoad } from "../containers/HomePage/saga";

export default function* rootSaga() {
    yield all([
        watchRecipesLoad(),
        watchTagsLoad(),
        watchRecipesByTagLoad()
    ]);
}