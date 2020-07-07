/**
 *
 * RecipeRating
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RecipeRatingContainer from './RecipeRatingContainer';
import AddRatingButton from './AddRatingButton';
import { FaHeart } from 'react-icons/all';
import { FaRocketchat } from 'react-icons/all';
import { IconContext } from 'react-icons';
import Icon from './Icon';
import './index.css';

const RecipeRating = ({ user, sendRating, recipeId, ratingsMean, ...props }) => {
    function addRating(value) {
        if (user.loggedIn) {
            sendRating(value, user.userId, recipeId);
        } else {
            props.history.push('/login');
        }
    }

    return (
        <RecipeRatingContainer>
            <AddRatingButton>
                <Icon>
                    <IconContext.Provider value={{ className: 'heart-icon', size: '16px' }}>
                        <FaHeart onClick={() => addRating(1)} />
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
        </RecipeRatingContainer>
    );
};

RecipeRating.propTypes = {
    user: PropTypes.object.isRequired,
    sendRating: PropTypes.func.isRequired,
    recipeId: PropTypes.string.isRequired,
    ratingsMean: PropTypes.number,
    history: PropTypes.object,
    commentsNumber: PropTypes.number,
};

export default memo(withRouter(RecipeRating));
