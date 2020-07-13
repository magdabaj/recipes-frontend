import {LOAD_RECIPES_ERROR, LOAD_TAGS, LOAD_TAGS_ERROR, LOAD_TAGS_SUCCESS} from "./constants";

// export const loadRecipes = page => ({
//     type: LOAD_RECIPES,
//     page,
// });
//
// export const loadRecipesSuccess = response => ({
//     type: LOAD_RECIPES_SUCCESS,
//     response,
// });

export const loadRecipesError = error => ({
    type: LOAD_RECIPES_ERROR,
    error,
});

export const loadTags = () => ({
    type: LOAD_TAGS,
});

export const loadTagsSuccess = tags => ({
    type: LOAD_TAGS_SUCCESS,
    tags,
});

export const loadTagsError = error => ({
    type: LOAD_TAGS_ERROR,
    error,
});