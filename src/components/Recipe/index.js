/**
 *
 * Recipes
 *
 */

import React from 'react';
import { Redirect } from 'react-router';
import RecipeContainer from './RecipeContainer';
import Image from '../Image';
import RecipeRating from '../RecipeRating';
import RecipeTitle from './RecipeTitle';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
    max-width: 100%;
    width: 600px;
    height: auto;
`;

function Recipes({ recipes, user, sendRating, ratingsMean, commentsNumber }) {
    return recipes.map(recipe => (
        <RecipeContainer key={recipe.id}>
            <Image>
                <RecipeTitle>
                    <a href={recipe.url} rel={"noreferrer"} target={'_blank'}>
                        {recipe.title}
                    </a>
                </RecipeTitle>
                <RecipeRating
                    user={user}
                    // sendRating={user.loggedIn ? sendRating : <Redirect to={'/login'} />}
                    sendRating={sendRating}
                    recipeId={recipe.id}
                    ratingsMean={ratingsMean}
                    commentsNumber={commentsNumber}
                />
                <div>
                    <a href={recipe.url} rel={"noreferrer"} target={'_blank'}>
                        <Img src={recipe.image} alt={recipe.title} />
                    </a>
                </div>
                <div className={'source-website'}> Pobrano z: {recipe.website}</div>
                <div className={'source-website'}>
                    <a href={recipe.url} target={'_blank'} rel={"noreferrer"} className={'source-website--link'}>
                        Kliknij zeby zobaczyc przepis
                    </a>
                </div>
            </Image>
        </RecipeContainer>
    ));
}

Recipes.propTypes = {
    commentsNumber: PropTypes.number,
    recipe: PropTypes.object,
    user: PropTypes.object.isRequired,
    sendRating: PropTypes.func.isRequired,
    ratingsMean: PropTypes.number,
};

export default Recipes;
