/*
 *
 * RecipesHomePage reducer
 *
 */
import produce from 'immer';
import fetchStates from '../../utils/fetchStates';
import {
    LOAD_TAGS,
    LOAD_TAGS_ERROR,
    LOAD_TAGS_SUCCESS,
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
const appReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case LOAD_TAGS:
                draft.status = fetchStates.fetching;
                break;
            case LOAD_TAGS_ERROR:
                draft.status = fetchStates.error;
                draft.error = action.error;
                break;
            case LOAD_TAGS_SUCCESS:
                draft.status = fetchStates.success;
                draft.tags = action.tags;
                break;
        }
    });

export default appReducer;
