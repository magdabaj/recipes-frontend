/*
 *
 * RecipeContainer actions
 *
 */

import {
    GET_RATINGS_ERROR,
    GET_RATINGS,
    GET_RATINGS_SUCCESS,
    GET_RECIPE,
    GET_RECIPE_ERROR,
    LOAD_TAGS,
    LOAD_TAGS_SUCCESS,
    LOAD_TAGS_ERROR,
    GET_RECIPE_SUCCESS,
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
    EDIT_COMMENT_SUCCESS,
    EDIT_COMMENT_ERROR,
    REMOVE_COMMENT,
    REMOVE_COMMENT_SUCCESS,
    REMOVE_COMMENT_ERROR, CLEAR_STATUS, CLEAR_DELETE_COMMENTS_STATUS,
} from './constants';

export const getRecipeRatings = recipeId => ({
    type: GET_RATINGS,
    recipeId,
});

export const getRecipeRatingsSuccess = (message, recipeId, ratingsMean) => ({
    type: GET_RATINGS_SUCCESS,
    message,
    recipeId,
    ratingsMean,
});

export const getRecipeRatingsError = error => ({
    type: GET_RATINGS_ERROR,
    error,
});

export const getRecipe = recipeId => ({
    type: GET_RECIPE,
    recipeId,
});

export const getRecipeSuccess = recipe => ({
    type: GET_RECIPE_SUCCESS,
    recipe,
});

export const getRecipeError = error => ({
    type: GET_RECIPE_ERROR,
    error,
});


export const sendRating = (rate, userId, recipeId) => ({
    type: SEND_RATING,
    rate,
    userId,
    recipeId,
});

export const sendRatingSuccess = (message, recipeId, ratingsMean) => ({
    type: SEND_RATING_SUCCESS,
    message,
    recipeId,
    ratingsMean,
});

export const sendRatingError = error => ({
    type: SEND_RATING_ERROR,
    error,
});

export const getComments = recipeId => ({
    type: GET_COMMENTS,
    recipeId,
});

export const getCommentsSuccess = response => ({
    type: GET_COMMENTS_SUCCESS,
    response,
});

export const getCommentsError = error => ({
    type: GET_COMMENTS_ERROR,
    error,
});

export const addComment = (recipeId, content, userId) => ({
    type: ADD_COMMENT,
    recipeId,
    userId,
    content,
});

export const addCommentSuccess = message => ({
    type: ADD_COMMENT_SUCCESS,
    message,
});

export const addCommentError = error => ({
    type: ADD_COMMENT_ERROR,
    error,
});

export const editComment = (commentId, content, userId) => ({
    type: EDIT_COMMENT,
    commentId,
    userId,
    content,
});

export const editCommentSuccess = message => ({
    type: EDIT_COMMENT_SUCCESS,
    message,
});

export const editCommentError = error => ({
    type: EDIT_COMMENT_ERROR,
    error,
});

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId,
});

export const removeCommentSuccess = message => ({
    type: REMOVE_COMMENT_SUCCESS,
    message,
});

export const removeCommentError = error => ({
    type: REMOVE_COMMENT_ERROR,
    error,
});

export const clearStatus = () => ({
    type: CLEAR_STATUS
})

export const clearDeleteCommentsStatus = () => ({
    type: CLEAR_DELETE_COMMENTS_STATUS
})
