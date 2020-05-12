import { all } from 'redux-saga/effects';
import { watchRecipesByTagLoad, watchRecipesLoad, watchTagsLoad } from "../containers/HomePage/saga";
import { watchAuthenticate, watchSignIn, watchSignOut, watchSignUp } from "../containers/LoginContainer/saga";
import {watchRecipeDelete, watchUserRecipesLoad, watchUserTagsLoad} from "../containers/UserRecipesContainer/saga";
import  { watchRecipeFormTagsLoad, watchAddCancel, watchRecipeAdd } from "../containers/RecipesFormContainer/saga";

export default function* rootSaga() {
    yield all([
        watchRecipesLoad(),
        watchTagsLoad(),
        watchRecipesByTagLoad(),
        watchAuthenticate(),
        watchSignIn(),
        watchSignOut(),
        watchSignUp(),
        watchUserRecipesLoad(),
        watchUserTagsLoad(),
        watchRecipeDelete(),
        watchAddCancel(),
        watchRecipeAdd(),
        watchRecipeFormTagsLoad(),
    ]);
}