/*
 *
 * UserRecipesContainer actions
 *
 */

import {
    LOAD_USER_RECIPES,
    LOAD_USER_RECIPES_ERROR,
    LOAD_USER_RECIPES_SUCCESS,
    DELETE_RECIPE,
    DELETE_RECIPE_ERROR,
    DELETE_RECIPE_SUCCESS,
    LOAD_TAGS, LOAD_TAGS_ERROR, LOAD_TAGS_SUCCESS
} from './constants';

export const loadUserRecipes = (email, page) => ({
    type: LOAD_USER_RECIPES,
    email,
    page,
});

export const loadUserRecipesSuccess = response => ({
    type: LOAD_USER_RECIPES_SUCCESS,
    response,
});

export const loadUserRecipesError = error => ({
    type: LOAD_USER_RECIPES_ERROR,
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

export const deleteRecipe = recipeId => ({
    type: DELETE_RECIPE,
    recipeId,
});

export const deleteRecipeSuccess = recipeId => ({
    type: DELETE_RECIPE_SUCCESS,
    recipeId,
});

export const deleteRecipeError = error => ({
    type: DELETE_RECIPE_ERROR,
    error,
});
