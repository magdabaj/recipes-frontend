import RecipesForm from "../index";
import { Redirect as MockRedirect } from "react-router";
import {fireEvent, screen, waitFor} from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {fakeRecipes} from "../../../utils/testHelpers/fixtures/recipes";
import {addRecipe as addRecipeMocked} from "../../../containers/RecipesFormContainer/actions";
import {fakeTags} from "../../../utils/testHelpers/fixtures/tags";
import React from "react";
import commonTests from "../../../utils/testHelpers/commonTests";
import {axe} from "jest-axe";
import {fakeUser} from "../../../utils/testHelpers/fixtures/user";
import {fakeRecipe} from "../../../utils/testHelpers/fixtures/recipe";
import fetchStates from "../../../utils/fetchStates";

jest.mock("../../../containers/RecipesFormContainer/actions")
jest.mock('react-router', () => {
    return {
        Redirect: jest.fn(() => null)
    }
})

const renderRecipesForm = () =>
    render(
        <RecipesForm
            recipes={fakeRecipes}
            addRecipe={addRecipeMocked}
            tags={fakeTags}
            userId={fakeUser.id}
        />)

commonTests(renderRecipesForm)

test('renders form without violations', async() => {
    const {container} = renderRecipesForm()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
})

test('fires addRecipes actions when form is correct', async () => {
    const { rerender } = renderRecipesForm()
    const titleInput = screen.getByLabelText(/Tytuł/i)
    const websiteInput = screen.getByLabelText(/Strona/i)
    const urlInput = screen.getByLabelText("Url")
    const imageInput = screen.getByLabelText(/Url zdjęcia/i)
    const tagCheckbox = screen.getByTestId('alkohol')

    const saveButton = screen.getByText(/zapisz przepis/i)

    await userEvent.type(titleInput, 'test')
    await userEvent.type(websiteInput, 'test')
    await userEvent.type(urlInput, 'test')
    await userEvent.type(imageInput, 'test')
    // expect(checkbox).not.toBeInTheDocument()

    userEvent.click(tagCheckbox)

    const checkbox = screen.getByText(/rum/i)
    expect(checkbox).toBeInTheDocument()
    fireEvent.click(checkbox, { target: { checked: true } });
    await waitFor(() => userEvent.click(saveButton))

    expect(addRecipeMocked).toHaveBeenCalled()
    expect(addRecipeMocked).toHaveBeenCalledTimes(1)
    expect(addRecipeMocked).toHaveBeenCalledWith({recipe: fakeRecipe, userId: 1})
    
    rerender(
        <RecipesForm
            recipes={fakeRecipes}
            addRecipe={addRecipeMocked}
            tags={fakeTags}
            userId={fakeUser.id}
            status={fetchStates.success}
        />)

    expect(MockRedirect).toHaveBeenCalledWith({to: '/user-recipes'}, {})
})

test('shows error message if tag is not chosen',   () => {
    renderRecipesForm()
    const titleInput = screen.getByLabelText(/Tytuł/i)
    const websiteInput = screen.getByLabelText(/Strona/i)
    const urlInput = screen.getByLabelText("Url")
    const imageInput = screen.getByLabelText(/Url zdjęcia/i)
    const tagCheckbox = screen.getByTestId('warzywa, grzyby')

    // expect(errorMessage).not.toBeInTheDocument()

    const saveButton = screen.getByText(/zapisz przepis/i)

    userEvent.type(titleInput, 'test')
    userEvent.type(websiteInput, 'test')
    userEvent.type(urlInput, 'test')
    userEvent.type(imageInput, 'test')
    userEvent.click(tagCheckbox)
    userEvent.click(saveButton)
    const errorMessage = screen.getByText(/kategoria jest wymagana/i)
    expect(errorMessage).toBeInTheDocument()
})

test('calls setCancel function on click', async () => {
    renderRecipesForm()

    const cancelButton = screen.getByText(/cofnij/i)
    userEvent.click(cancelButton)

    await waitFor(() => {
        expect(MockRedirect).toHaveBeenCalledWith({to: '/user-recipes'}, {})
    })

})

test('doesn\'t call the addRecipe function when inputs are empty', () => {
    renderRecipesForm()

    const saveButton = screen.getByText(/zapisz przepis/i)

    userEvent.click(saveButton)

    expect(addRecipeMocked).not.toHaveBeenCalled()
})

test('displays different texts when editing recipe', () => {
    render(
        <RecipesForm
            recipes={fakeRecipes}
            addRecipe={addRecipeMocked}
            tags={fakeTags}
            userId={fakeUser.id}
            recipeId={'1'}
        />
    )

    const editButton = screen.queryByText(/edytuj przepis/i)
    expect(editButton).toBeInTheDocument()
})