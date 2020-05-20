/**
 *
 * UserRecipesContainer
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import makeSelectUserRecipesContainer, {
    makeSelectDeleteRecipeError,
    makeSelectDeletingRecipe,
    makeSelectNextPage,
    makeSelectPreviousPage,
    makeSelectStatus,
    makeSelectTotalPages,
    makeSelectUserRecipes,
    selectPage,
} from './selectors';
import { makeSelectTags } from "../App/selectors";
import { makeSelectUser } from '../LoginContainer/selectors';
import LoginFormContainer from '../LoginContainer';
import { loadUserRecipes, deleteRecipe } from './actions';
import { loadTags } from "../App/actions";
import fetchStates from '../../utils/fetchStates';
import Spinner from '../../components/Spinner';
import UserRecipesComponent from "../../components/UserRecipesComponent";

export function UserRecipesContainer({ status, ...props }) {

    useEffect(() => {
        if (props.tags.length === 0) props.loadTags();
    }, []);

    useEffect(() =>  {
        if (props.user.loggedIn === true) props.loadUserRecipes(props.user.email, props.page);
    }, [props.page, props.user.status, props.user.email])

    return status === fetchStates.fetching ? (
            <Spinner />
        ) : (
            <UserRecipesComponent {...props} />
        )
}

UserRecipesContainer.propTypes = {};

const mapStateToProps = createStructuredSelector({
    userRecipesContainer: makeSelectUserRecipesContainer(),
    user: makeSelectUser(),
    tags: makeSelectTags(),
    recipes: makeSelectUserRecipes(),
    page: selectPage(),
    totalPages: makeSelectTotalPages(),
    nextPage: makeSelectNextPage(),
    previousPage: makeSelectPreviousPage(),
    deletingRecipe: makeSelectDeletingRecipe(),
    deleteRecipeError: makeSelectDeleteRecipeError(),
    status: makeSelectStatus(),
});

function mapDispatchToProps(dispatch) {
    return {
        loadUserRecipes: (email, page) => dispatch(loadUserRecipes(email, page)),
        loadTags: () => dispatch(loadTags()),
        deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId)),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(UserRecipesContainer);
