/*
 *
 * RecipeContainer reducer
 *
 */
import produce from 'immer';
import {
    GET_RECIPE,
    GET_RECIPE_ERROR,
    GET_RECIPE_SUCCESS,
    GET_RATINGS,
    GET_RATINGS_ERROR,
    GET_RATINGS_SUCCESS,
    LOAD_TAGS,
    LOAD_TAGS_ERROR,
    LOAD_TAGS_SUCCESS,
    SEND_RATING,
    SEND_RATING_ERROR,
    SEND_RATING_SUCCESS,
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_ERROR,
    ADD_COMMENT,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_ERROR,
    EDIT_COMMENT,
    REMOVE_COMMENT,
    REMOVE_COMMENT_SUCCESS,
    REMOVE_COMMENT_ERROR,
} from './constants';
import fetchStates from '../../utils/fetchStates';

export const initialState = {
    ratingsMean: null,
    getRatingsStatus: fetchStates.fetching,
    recipe: [],
    tags: [],
    recipeId: null,
    comments: [],
    addCommentStatus: null,
    removeCommentStatus: null,
    commentsError: null,
    commentsNumber: 0,
    status: null,
};

/* eslint-disable default-case, no-param-reassign */
const recipeContainerReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case GET_RATINGS_SUCCESS:
                draft.ratingsMean = action.ratingsMean;
                draft.message = action.message;
                draft.getRatingsStatus = fetchStates.success;
                break;
            case GET_RATINGS_ERROR:
                draft.error = action.error;
                draft.getRatingsStatus = fetchStates.error;
                break;
            case GET_RECIPE:
                // draft.status = fetchStates.fetching
                draft.recipeId = action.recipeId;
                break;
            case GET_RECIPE_SUCCESS:
                draft.recipe = action.recipe;
                draft.status = fetchStates.success;
                break;
            case GET_RECIPE_ERROR:
                draft.status = fetchStates.error;
                draft.error = action.error;
                break;
            // case GET_COMMENTS || GET_RATINGS:
            //   draft.status = fetchStates.fetching;
            //   break;
            case LOAD_TAGS:
                draft.status = fetchStates.fetching;
                break;
            case LOAD_TAGS_SUCCESS:
                draft.tags = action.tags;
                draft.status = fetchStates.success;
                break;
            case LOAD_TAGS_ERROR:
                draft.error = action.error;
                draft.status = fetchStates.error;
                break;
            case SEND_RATING_ERROR:
                draft.getRatingsStatus = fetchStates.error;
                break;
            case SEND_RATING:
                draft.getRatingsStatus = fetchStates.fetching;
                break;
            case SEND_RATING_SUCCESS:
                draft.getRatingsStatus = fetchStates.success;
                draft.ratingsMean = action.ratingsMean;
                break;
            case GET_COMMENTS_SUCCESS:
                // draft.status = fetchStates.success;
                draft.comments = action.response.comments;
                draft.commentsNumber = action.response.commentsNumber;
                break;
            case GET_COMMENTS_ERROR:
                // draft.status = fetchStates.error;
                draft.error = action.error;
                break;
            case ADD_COMMENT:
                draft.addCommentStatus = fetchStates.fetching;
                draft.commentsError = '';
                break;
            case ADD_COMMENT_SUCCESS:
                draft.addCommentStatus = fetchStates.success;
                break;
            case ADD_COMMENT_ERROR:
                draft.addCommentStatus = fetchStates.error;
                draft.commentsError = action.error;
                break;
            case REMOVE_COMMENT:
                draft.removeCommentStatus = fetchStates.fetching;
                break;
            case REMOVE_COMMENT_SUCCESS:
                draft.removeCommentStatus = fetchStates.success;
                break;
            case REMOVE_COMMENT_ERROR:
                draft.removeCommentStatus = fetchStates.error;
                draft.commentsError = action.error;
                break;
        }
    });

export default recipeContainerReducer;
