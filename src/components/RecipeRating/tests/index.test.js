import RecipeRating from "../index";
import React from "react";
import {fakeUser} from "../../../utils/testHelpers/fixtures/user";
import commonTests from "../../../utils/testHelpers/commonTests";
import {renderWithRouter} from "../../../utils/testHelpers";

const sendRatingMocked = jest.fn()

const renderRecipeRating = () =>
    renderWithRouter(
        <RecipeRating
            user={fakeUser}
            sendRating={sendRatingMocked}
            recipeId={2}
        />)

commonTests(renderRecipeRating)

