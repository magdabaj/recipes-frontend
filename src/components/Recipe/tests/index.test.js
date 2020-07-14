import Recipes from "../index";
import {fakeUser} from "../../../utils/testHelpers/fixtures/user";
import {fakeRecipes} from "../../../utils/testHelpers/fixtures/recipes";
import commonTests from "../../../utils/testHelpers/commonTests";
import React from "react";
import {renderWithRouter} from "../../../utils/testHelpers";

const sendRatingMocked = jest.fn()

const renderRecipe = () =>
    renderWithRouter(<Recipes user={fakeUser} commentsNumber={5} sendRating={sendRatingMocked} recipes={fakeRecipes}/>)

commonTests(renderRecipe)

