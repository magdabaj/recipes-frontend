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
    REMOVE_COMMENT_ERROR, CLEAR_STATUS, CLEAR_DELETE_COMMENTS_STATUS, CLEAR_SEND_RATING_STATUS,
} from './constants';
import fetchStates from '../../utils/fetchStates';

export const initialState = {
    ratingsMean: null,
    recipe: [],
    recipeId: null,
    comments: [],
    commentsError: null,
    commentsNumber: 0,
    addCommentStatus: null,
    deleteCommentStatus: null,
    status: null,
    sendRatingStatus: null,
    getRatingsStatus: null,
};

/* eslint-disable default-case, no-param-reassign */
const recipeContainerReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case GET_RATINGS:
                draft.getRatingsStatus = fetchStates.fetching;
                break;
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
            case SEND_RATING_ERROR:
                draft.sendRatingStatus = fetchStates.error;
                break;
            case SEND_RATING:
                draft.sendRatingStatus = fetchStates.fetching;
                break;
            case SEND_RATING_SUCCESS:
                draft.sendRatingStatus = fetchStates.success;
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
                draft.deleteCommentStatus = fetchStates.fetching;
                break;
            case REMOVE_COMMENT_SUCCESS:
                draft.deleteCommentStatus = fetchStates.success;
                break;
            case REMOVE_COMMENT_ERROR:
                draft.deleteCommentStatus = fetchStates.error;
                draft.commentsError = action.error;
                break;
            case CLEAR_STATUS:
                draft.addCommentStatus = null;
                break;
            case CLEAR_DELETE_COMMENTS_STATUS:
                draft.deleteCommentStatus = null;
                break;
            case CLEAR_SEND_RATING_STATUS:
                draft.sendRatingStatus = null;
                break;
        }
    });

export default recipeContainerReducer;
