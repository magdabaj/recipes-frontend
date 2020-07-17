/**
 *
 * RecipeRating
 *
 */

import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import RecipeRatingContainer from './RecipeRatingContainer';
import AddRatingButton from './AddRatingButton';
import { FaHeart } from 'react-icons/fa';
import { FaRocketchat } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Icon from './Icon';
import './index.css';

const RecipeRating = ({ user, sendRating, recipeId, ratingsMean, ...props }) => {
    const [redirect, setRedirect] = useState(false)

    // todo alert before deleting recipe
    const addRating = value =>
        user.loggedIn ?
            sendRating(value, user.userId, recipeId)
            : setRedirect(true)


    return (
        <RecipeRatingContainer>
            <AddRatingButton>
                <Icon>
                    <IconContext.Provider value={{ className: 'heart-icon', size: '16px' }}>
                        <FaHeart onClick={() => addRating(1)} data-testid={'heart-1'}/>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: 'heart-icon', size: '16px' }}>
                        <FaHeart onClick={() => addRating(2)} />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: 'heart-icon', size: '16px' }}>
                        <FaHeart onClick={() => addRating(3)} />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: 'heart-icon', size: '16px' }}>
                        <FaHeart onClick={() => addRating(4)} />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: 'heart-icon', size: '16px' }}>
                        <FaHeart onClick={() => addRating(5)} />
                    </IconContext.Provider>
                </Icon>
                {ratingsMean}
            </AddRatingButton>
            <AddRatingButton >
                Komentarze ({props.commentsNumber})
                <Icon>
                    <IconContext.Provider value={{ className: 'heart-icon', size: '16px' }}>
                        <FaRocketchat />
                    </IconContext.Provider>
                </Icon>
            </AddRatingButton>
            {redirect && <Redirect to={'/login'}/>}
        </RecipeRatingContainer>
    );
};

RecipeRating.propTypes = {
    user: PropTypes.object.isRequired,
    sendRating: PropTypes.func.isRequired,
    recipeId: PropTypes.number.isRequired,
    // recipeId should be string but tests don't pass
    ratingsMean: PropTypes.number,
    history: PropTypes.object,
    commentsNumber: PropTypes.number,
};

export default memo(RecipeRating);
