/**
 *
 * RecipeContainer
 *
 */

import React, { useEffect } from 'react';
import TagsListComponent from '../TagListComponent';
import PropTypes from 'prop-types';
import CommentsComponent from '../CommentsComponent';
import '../../containers/RecipeContainer/index.css';
import Recipe from '../Recipe';
import { Tween, Timeline } from 'react-gsap';
import Spinner from "../Spinner";
import fetchStates from "../../utils/fetchStates";
import {toast} from "react-toastify";
// import styled from 'styled-components';

function RecipeWrapper({ recipe, user, sendRating, ratingsMean, getRecipeRatings, tags, addCommentStatus, deleteCommentStatus, sendRatingStatus, ...props }) {
    useEffect(() => {
        getRecipeRatings(props.recipeId);
        props.getRecipe(props.recipeId);
    }, [props.recipeId, ratingsMean]);

    return (
        <section className={'container'}>
            <Timeline
                target={
                    <div className={'recipe-wrapper'}>
                        <div className={'recipes-container'}>
                            {recipe ? (
                                <Recipe
                                    recipes={recipe}
                                    user={user}
                                    sendRating={sendRating}
                                    ratingsMean={ratingsMean}
                                    {...props}
                                />
                            ) : (
                                <Spinner/>
                            )}

                            <CommentsComponent
                                comments={props.comments}
                                addComment={props.addComment}
                                user={user}
                                recipeId={props.recipeId}
                                getComments={props.getComments}
                                addCommentStatus={addCommentStatus}
                                {...props}
                            />
                        </div>
                        <ul className={'tags-container'}>
                            <TagsListComponent tags={tags} />
                        </ul>
                    </div>
                }
            >
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
            </Timeline>
            {deleteCommentStatus === fetchStates.success && toast.success("Komentarz usunięty pomyślnie")}
            {addCommentStatus === fetchStates.success && toast.success("Komentarz został dodany")}
            {sendRatingStatus === fetchStates.success && toast.success("Twoja ocena została zapisana")}
        </section>
    );
}

RecipeWrapper.propTypes = {
    recipe: PropTypes.object.isRequired,
    user: PropTypes.object,
    sendRating: PropTypes.func.isRequired,
    getRecipeRatings: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
    addCommentStatus: PropTypes.string,
    deleteCommentStatus: PropTypes.string,
    sendRatingStatus: PropTypes.string,
    recipeId: PropTypes.string.isRequired,
    getRecipe: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired,
    ratingsMean: PropTypes.number,
};

export default RecipeWrapper;
