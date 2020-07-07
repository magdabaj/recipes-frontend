/*
 *
 * RecipesHomePage actions
 *
 */

import {
    LOAD_RECIPES,
    LOAD_RECIPES_BY_TAG,
    LOAD_RECIPES_BY_TAG_ERROR,
    LOAD_RECIPES_BY_TAG_SUCCESS,
    LOAD_RECIPES_ERROR,
    LOAD_RECIPES_SUCCESS,
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
