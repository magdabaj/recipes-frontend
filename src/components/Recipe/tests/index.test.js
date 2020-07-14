import { render } from "@testing-library/react";
import Recipes from "../index";
import {fakeUser} from "../../../utils/testHelpers/fixtures/user";
import {fakeRecipes} from "../../../utils/testHelpers/fixtures/recipes";
import commonTests from "../../../utils/testHelpers/commonTests";
import React from "react";

const sendRatingMocked = jest.fn()

const renderRecipe = () =>
    render(<Recipes user={fakeUser} commentsNumber={5} sendRating={sendRatingMocked} recipes={fakeRecipes}/>)

commonTests(renderRecipe)

test('')