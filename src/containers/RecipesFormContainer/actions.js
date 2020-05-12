/*
 *
 * RecipesFormContainer actions
 *
 */

import {
    ADD_RECIPE,
    ADD_RECIPE_ERROR,
    ADD_RECIPE_SUCCESS,
    CANCEL,
    LOAD_TAGS,
    LOAD_TAGS_ERROR,
    LOAD_TAGS_SUCCESS,
} from './constants';

export const addRecipe = (recipe, userId, tagId) => ({
    type: ADD_RECIPE,
    recipe,
    userId,
    tagId,
});

export const addRecipeSuccess = message => ({
    type: ADD_RECIPE_SUCCESS,
    message,
});

export const addRecipeError = error => ({
    type: ADD_RECIPE_ERROR,
    error,
});

export const cancelAdding = () => ({
    type: CANCEL,
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

// todo route authentication
// todo styled components
// todo material ui