/*
 *
 * RecipesHomePage reducer
 *
 */
import produce from 'immer';
import fetchStates from '../../utils/fetchStates';
import {
    LOAD_RECIPES,
    LOAD_RECIPES_BY_TAG,
    LOAD_RECIPES_BY_TAG_ERROR,
    LOAD_RECIPES_BY_TAG_SUCCESS,
    LOAD_RECIPES_ERROR,
    LOAD_RECIPES_SUCCESS,
} from './constants';

export const initialState = {
    recipes: [],
    tags: [],
    status: fetchStates.fetching,
    error: null,
    page: 1,
    totalPages: null,
    previousPage: null,
    nextPage: null,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case LOAD_RECIPES:
                draft.status = fetchStates.fetching;
                break;
            case LOAD_RECIPES_SUCCESS:
                draft.status = fetchStates.success;
                draft.recipes = action.response.items;
                draft.totalPages = action.response.totalPages;
                draft.previousPage = action.response.previousPage;
                draft.nextPage = action.response.nextPage;
                break;
            case LOAD_RECIPES_ERROR :
                draft.status = fetchStates.error;
                draft.error = action.error;
                break;
            case LOAD_RECIPES_BY_TAG:
                draft.status = fetchStates.fetching;
                // draft.tagId = action.tagId;
                break;
            case LOAD_RECIPES_BY_TAG_SUCCESS:
                draft.recipes = action.response.items;
                draft.status = fetchStates.success;
                draft.totalPages = action.response.totalPages;
                draft.previousPage = action.response.previousPage;
                draft.nextPage = action.response.nextPage;
                break;
            case LOAD_RECIPES_BY_TAG_ERROR:
                draft.status = fetchStates.error;
                draft.error = action.error;
                break;
        }
    });

export default homePageReducer;
