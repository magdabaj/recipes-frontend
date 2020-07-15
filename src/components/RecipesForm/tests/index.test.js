import {renderWithRouter} from "../../../utils/testHelpers";
import RecipesForm from "../index";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import {fakeRecipes} from "../../../utils/testHelpers/fixtures/recipes";
import {addRecipe as addRecipeMocked} from "../../../containers/RecipesFormContainer/actions";
import {fakeTags} from "../../../utils/testHelpers/fixtures/tags";
import React from "react";
import commonTests from "../../../utils/testHelpers/commonTests";
import {axe} from "jest-axe";

jest.mock("../../../containers/RecipesFormContainer/actions")

const renderRecipesForm = () =>
    renderWithRouter(<RecipesForm recipes={fakeRecipes} addRecipe={addRecipeMocked} tags={fakeTags}/>)

commonTests(renderRecipesForm)

test('renders form without violations', async() => {
    const {container} = renderRecipesForm()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
})

test('calls addRecipe function on click', () => {
    renderRecipesForm()
    const titleInput = screen.getByLabelText(/title/i)
    const websiteInput = screen.getByLabelText(/website/i)
    const urlInput = screen.getByLabelText(/url/i)
    const imageInput = screen.getByLabelText(/image/i)

    const saveButton = screen.getByLabelText(/zapisz przepis/i)

    userEvent.type(titleInput, 'test')
    userEvent.type(websiteInput, 'test')
    userEvent.type(urlInput, 'test')
    userEvent.type(imageInput, 'test')

    userEvent.click(saveButton)

    expect(addRecipeMocked).toHaveBeenCalled()
    expect(addRecipeMocked).toHaveBeenCalledTimes(1)
})

test('calls setCancel function on click', () => {
    renderRecipesForm()
    const setCancel = jest.fn()
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setCancel])

    const cancelButton = screen.getByLabelText(/cofnij/i)
    userEvent.click(cancelButton)

    expect(setCancel).toHaveBeenCalled()
    expect(setCancel).toHaveBeenCalledWith(true)
    expect(setCancel).toHaveBeenCalledTimes(1)
})