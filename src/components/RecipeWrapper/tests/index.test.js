import {renderWithRouter} from "../../../utils/testHelpers";
import RecipeWrapper from "../index";
import {fakeTags} from "../../../utils/testHelpers/fixtures/tags";
import {fakeComments} from "../../../utils/testHelpers/fixtures/coments";
import React from "react";
import {fakeRecipes} from "../../../utils/testHelpers/fixtures/recipes";
import commonTests from "../../../utils/testHelpers/commonTests";
import fetchStates from "../../../utils/fetchStates";
import {fakeUser} from "../../../utils/testHelpers/fixtures/user";

const renderRecipeWrapper = (addCommentStatus = fetchStates.fetching, recipeId = '1') =>
    renderWithRouter(
        <RecipeWrapper
            user={fakeUser}
            getRecipeRatings={jest.fn()}
            sendRating={jest.fn()}
            tags={fakeTags}
            recipe={fakeRecipes}
            recipeId={recipeId}
            getRecipe={jest.fn()}
            comments={fakeComments}
            addComment={jest.fn()}
            getComments={jest.fn()}
            addCommentStatus={addCommentStatus}
            removeComment={jest.fn()}
        />)

// commonTests(renderRecipeWrapper)

test('renders correctly', async () => {
    const { debug } = renderRecipeWrapper(fetchStates.fetching, '2')

    // const {debug} = renderRecipeWrapper(fetchStates.fetching, '2')
    // debug()
    // await waitFor(() => debug())
})