import { all } from 'redux-saga/effects';
import { watchRecipesByTagLoad, watchRecipesLoad, watchTagsLoad } from "../containers/HomePage/saga";
import { watchAuthenticate, watchSignIn, watchSignOut, watchSignUp } from "../containers/LoginContainer/saga";

export default function* rootSaga() {
    yield all([
        watchRecipesLoad(),
        watchTagsLoad(),
        watchRecipesByTagLoad(),
        watchAuthenticate(),
        watchSignIn(),
        watchSignOut(),
        watchSignUp(),
    ]);
}