/**
 *
 * RecipesFormContainer
 *
 */

// todo logout

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import makeSelectRecipesFormContainer, {
    makeSelectRecipesAddStatus,
    selectRecipeId,
    selectUserId,
} from './selectors';
import { makeSelectTags } from "../App/selectors";
import RecipesForm from '../../components/RecipesForm';
import { makeSelectUser } from '../LoginContainer/selectors';
import LoginContainer from '../LoginContainer/Loadable';
import { addRecipe, cancelAdding } from './actions';
import { loadTags } from "../App/actions";
import { makeSelectUserRecipes } from '../UserRecipesContainer/selectors';

export function RecipesFormContainer({ ...props }) {
    useEffect(() => {
        if (props.tags.length === 0) props.loadTags();
        else props.loadTags()
    }, []);

    console.log("tags ", props.tags)
    return props.user.loggedIn ? <RecipesForm {...props} /> : <LoginContainer />;
}

RecipesFormContainer.propTypes = {};

const mapStateToProps = createStructuredSelector({
    recipesFormContainer: makeSelectRecipesFormContainer(),
    userId: selectUserId(),
    user: makeSelectUser(),
    status: makeSelectRecipesAddStatus(),
    tags: makeSelectTags(),
    recipeId: selectRecipeId(),
    recipes: makeSelectUserRecipes(),
});

function mapDispatchToProps(dispatch) {
    return {
        addRecipe: (recipe, userId, tagId) => dispatch(addRecipe(recipe, userId, tagId)),
        loadTags: () => dispatch(loadTags()),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(RecipesFormContainer);
