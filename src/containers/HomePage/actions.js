/*
 *
 * RecipesHomePage actions
 *
 */

import {
    CHANGE_PAGE,
    CHANGE_PAGE_ERROR,
    CHANGE_PAGE_SUCCESS,
    LOAD_RECIPES,
    LOAD_RECIPES_BY_TAG,
    LOAD_RECIPES_BY_TAG_ERROR,
    LOAD_RECIPES_BY_TAG_SUCCESS,
    LOAD_RECIPES_ERROR,
    LOAD_RECIPES_SUCCESS,
    LOAD_TAGS,
    LOAD_TAGS_ERROR,
    LOAD_TAGS_SUCCESS,
} from './constants';

export const loadRecipes = page => ({
    type: LOAD_RECIPES,
    page,
});

export const loadRecipesSuccess = response => ({
    type: LOAD_RECIPES_SUCCESS,
    response,
});

export const loadRecipesError = error => ({
    type: LOAD_RECIPES_ERROR,
    error,
});

export const loadRecipesByTag = (tagId, page) => ({
    type: LOAD_RECIPES_BY_TAG,
    tagId,
    page,
});

export const loadRecipesByTagSuccess = response => ({
    type: LOAD_RECIPES_BY_TAG_SUCCESS,
    response,
});

export const loadRecipesByTagError = error => ({
    type: LOAD_RECIPES_BY_TAG_ERROR,
    error,
});

// export const changePage = page => ({
//   type: CHANGE_PAGE,
//   page,
// });
//
// export const changePageSuccess = response => ({
//   type: CHANGE_PAGE_SUCCESS,
//   response,
// });
//
// export const changePageError = error => ({
//   type: CHANGE_PAGE_ERROR,
//   error,
// })
//
