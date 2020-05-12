/*
 *
 * RecipesFormContainer reducer
 *
 */
import produce from 'immer';
import {
    ADD_RECIPE_ERROR,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE,
    CANCEL,
    LOAD_TAGS_SUCCESS,
    LOAD_TAGS,
    LOAD_TAGS_ERROR,
} from './constants';
import fetchStates from '../../utils/fetchStates';

export const initialState = {
    userId: null,
    error: null,
    status: null,
    tags: [],
    recipeId: null,
};

/* eslint-disable default-case, no-param-reassign */
const recipesFormContainerReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case ADD_RECIPE:
                draft.status = fetchStates.fetching;
                break;
            case ADD_RECIPE_SUCCESS:
                draft.status = fetchStates.success;
                draft.message = action.message;
                break;
            case ADD_RECIPE_ERROR:
                draft.status = fetchStates.error;
                draft.error = action.error;
                break;
            case CANCEL:
                draft.status = null;
                break;
            case LOAD_TAGS_SUCCESS:
                draft.tags = action.tags;
                break;
            case LOAD_TAGS_ERROR:
                draft.error = action.error;
                break;
        }
    });

export default recipesFormContainerReducer;
