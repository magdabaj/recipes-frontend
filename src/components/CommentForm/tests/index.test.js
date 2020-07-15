import React from "react";
// import 'jest-axe/extend-expect'
// import "babel-polyfill"
import {render, waitFor} from "@testing-library/react";
import CommentFormComponent from "../index";
import {test} from "@jest/globals";
import { fakeUser } from "../../../utils/testHelpers/fixtures/user";
import * as jestDOM from '@testing-library/jest-dom';
import fetchStates from "../../../utils/fetchStates";
import commonTests from "../../../utils/testHelpers/commonTests";
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'

expect.extend(jestDOM)

const mockedAddComment = jest.fn()

test('the form is accessible', async () => {
    const { container } = render(
        <CommentFormComponent
            user={fakeUser}
            addComment={mockedAddComment}
            recipeId={'1'}
            addCommentStatus={fetchStates.fetching}
        />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
})

test('renders CommentForm', () => {
    const { getByRole } = render(<CommentFormComponent user={fakeUser} addComment={mockedAddComment} recipeId={'1'}/>)
    const addButton = getByRole('button')

    userEvent.click(addButton)
    expect(addButton).toHaveTextContent('Dodaj komentarz')
})

test('shows loading message', () => {
    const { getByRole } = render(<CommentFormComponent user={fakeUser} addComment={mockedAddComment} recipeId={'1'} addCommentStatus={fetchStates.fetching}/>)
    const addButton = getByRole('button')

    userEvent.click(addButton)
    expect(addButton).toHaveTextContent('Dodawanie...')
})

test('should get input value and send comment', async() => {
    const { getByRole, getByLabelText } = render(
        <CommentFormComponent
            user={fakeUser}
            addComment={mockedAddComment}
            recipeId={'1'}
        />)
    const textArea = getByLabelText(/dodaj komentarz/i)
    const addButton = getByRole('button')

    expect(textArea.value).toBe('')
    // userEvent.change(textArea, {target: {value: 'test'}})
    await userEvent.type(textArea, 'test')
    expect(textArea.value).toBe('test')
    userEvent.click(addButton)

    await waitFor(() => {
        expect(mockedAddComment).toHaveBeenCalled();
    })
    expect(textArea.value).toBe('')
})

const renderCommentForm = () =>
    render(<CommentFormComponent
        user={fakeUser}
        addComment={mockedAddComment}
        recipeId={'1'}
        />)

commonTests(renderCommentForm)