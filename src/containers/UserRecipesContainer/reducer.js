/*
 *
 * UserRecipesContainer reducer
 *
 */
import produce from 'immer';
import {
    DELETE_RECIPE,
    DELETE_RECIPE_ERROR,
    DELETE_RECIPE_SUCCESS, LOAD_TAGS, LOAD_TAGS_ERROR, LOAD_TAGS_SUCCESS,
    LOAD_USER_RECIPES,
    LOAD_USER_RECIPES_ERROR,
    LOAD_USER_RECIPES_SUCCESS,
} from './constants';
import fetchStates from '../../utils/fetchStates';

export const initialState = {
    status: null,
    recipes: [],
    loadRecipesError: null,
    page: 1,
    totalPages: null,
    previousPage: null,
    nextPage: null,
    deletingRecipe: null,
    deleteRecipeError: null,
};

/* eslint-disable default-case, no-param-reassign */
const userRecipesContainerReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case LOAD_USER_RECIPES:
                draft.status = fetchStates.fetching;
                draft.loadingRecipesStatus = fetchStates.fetching;
                break;
            case LOAD_USER_RECIPES_SUCCESS:
                draft.status = fetchStates.success;
                draft.recipes = action.response.items;
                draft.loadingRecipesStatus = fetchStates.success;
                draft.totalPages = action.response.totalPages;
                draft.previousPage = action.response.previousPage;
                draft.nextPage = action.response.nextPage;
                break;
            case LOAD_USER_RECIPES_ERROR:
                draft.status = fetchStates.error;
                draft.loadingRecipesStatus = fetchStates.error;
                draft.loadRecipesError = action.error;
                break;
            case DELETE_RECIPE:
                draft.deletingRecipe = fetchStates.fetching;
                draft.deleteRecipeError = null;
                break;
            case DELETE_RECIPE_SUCCESS:
                draft.deletingRecipe = fetchStates.success;
                draft.deleteRecipeError = null;
                draft.recipes = state.recipes.filter(recipe => recipe.id !== action.recipeId);
                break;
            case DELETE_RECIPE_ERROR:
                draft.deletingRecipe = fetchStates.error;
                draft.deleteRecipeError = action.error;
                break;
        }
    });

export default userRecipesContainerReducer;
