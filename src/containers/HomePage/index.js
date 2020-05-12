import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {compose} from "redux";
import { createStructuredSelector } from 'reselect';
import makeSelectRecipesHomePage, {
    makeSelectNextPage,
    makeSelectPreviousPage,
    makeSelectRecipes,
    makeSelectStatus,
    makeSelectTags,
    makeSelectTotalPages,
    selectPage,
    selectTagId,
} from './selectors';
import { loadRecipes, loadRecipesByTag, loadTags } from './actions';
import AllRecipesComponent from '../../components/RecipesComponent';
import fetchStates from '../../utils/fetchStates';
import Spinner from '../../components/Spinner';

export function RecipesHomePage({ status, ...props }) {

    useEffect(() => {
        if (props.tags.length === 0) props.loadTags();
        if (props.tagId) props.loadRecipesByTag(props.tagId, props.page);
        else props.loadRecipes(props.page);
    }, [props.tagId, props.page]);

    // todo add list of rated recipes
    // todo add recipes to favourites

    console.log("tags", props.tags)
    console.log(status)

    return status === fetchStates.fetching /*|| status === fetchStates.error*/ ? (
        <Spinner />
    ) : (
        <AllRecipesComponent {...props} />
    );
}

RecipesHomePage.propTypes = {};

const mapStateToProps = createStructuredSelector({
    recipesHomePage: makeSelectRecipesHomePage(),
    tags: makeSelectTags(),
    recipes: makeSelectRecipes(),
    tagId: selectTagId(),
    page: selectPage(),
    totalPages: makeSelectTotalPages(),
    nextPage: makeSelectNextPage(),
    previousPage: makeSelectPreviousPage(),
    status: makeSelectStatus(),
});

function mapDispatchToProps(dispatch) {
    return {
        loadRecipes: page => dispatch(loadRecipes(page)),
        loadRecipesByTag: (tagId, page) => dispatch(loadRecipesByTag(tagId, page)),
        loadTags: () => dispatch(loadTags()),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

// export default (withConnect)(RecipesHomePage)


export default compose(
    withConnect,
    memo,
)(RecipesHomePage);