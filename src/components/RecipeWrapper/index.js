/**
 *
 * RecipeContainer
 *
 */

import React, { memo, useEffect, useState } from 'react';
import TagsListComponent from '../TagListComponent';
import PropTypes from 'prop-types';
import CommentsComponent from '../CommentsComponent';
import '../../containers/RecipeContainer/index.css';
import Recipe from '../Recipe';
import { Tween, Timeline } from 'react-gsap';
// import styled from 'styled-components';

function RecipeWrapper({ recipe, user, sendRating, ratingsMean, getRecipeRatings, tags, ...props }) {
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
                                <h1>There are no recipes yet</h1>
                            )}

                            <CommentsComponent
                                comments={props.comments}
                                addComment={props.addComment}
                                user={user}
                                recipeId={props.recipeId}
                                getComments={props.getComments}
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
        </section>
    );
}

RecipeWrapper.propTypes = {};

export default RecipeWrapper;
