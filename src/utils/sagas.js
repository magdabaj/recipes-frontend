import { all } from 'redux-saga/effects';
import { watchTagsLoad } from "../containers/App/saga";
import { watchRecipesByTagLoad, watchRecipesLoad } from "../containers/HomePage/saga";
import { watchAuthenticate, watchSignIn, watchSignOut, watchSignUp } from "../containers/LoginContainer/saga";
import {watchRecipeDelete, watchUserRecipesLoad} from "../containers/UserRecipesContainer/saga";
import  { watchAddCancel, watchRecipeAdd } from "../containers/RecipesFormContainer/saga";
import {watchCommentAdd, watchCommentDelete, watchCommentsLoad, watchRatingSend, watchRecipeLoad, watchRecipeRatingsLoad} from "../containers/RecipeContainer/saga";

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
        watchRecipeDelete(),
        watchAddCancel(),
        watchRecipeAdd(),
        watchRecipeLoad(),
        watchCommentsLoad(),
        watchCommentDelete(),
        watchCommentAdd(),
        watchRatingSend(),
        watchRecipeRatingsLoad(),
    ]);
}