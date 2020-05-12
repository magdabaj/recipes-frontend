/**
 *
 * Recipes
 *
 */

import React from 'react';
import { matchPath, Redirect } from 'react-router';
import RecipeContainer from './RecipeContainer';
import Image from '../Image';
import RecipeRating from '../RecipeRating';
import RecipeTitle from './RecipeTitle';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Recipes({ recipes, user, sendRating, ratingsMean, ...props }) {
    return recipes.map(recipe => (
        <RecipeContainer key={recipe.id}>
            <Image>
                <RecipeTitle>
                    <a href={recipe.url} target={'_blank'}>
                        {recipe.title}
                    </a>
                </RecipeTitle>
                <RecipeRating
                    user={user}
                    sendRating={user.loggedIn ? sendRating : <Redirect to={'/login'} />}
                    recipeId={recipe.id}
                    ratingsMean={ratingsMean}
                    commentsNumber={props.commentsNumber}
                />
                <div>
                    <a href={recipe.url} target={'_blank'}>
                        <img src={recipe.image} alt={recipe.title} />
                    </a>
                </div>
                <div className={'source-website'}> Pobrano z: {recipe.website}</div>
                <div className={'source-website'}>
                    <a href={recipe.url} target={'_blank'} className={'source-website--link'}>
                        Kliknij zeby zobaczyc przepis
                    </a>
                </div>
            </Image>
        </RecipeContainer>
    ));
}

Recipes.propTypes = {};

export default Recipes;
