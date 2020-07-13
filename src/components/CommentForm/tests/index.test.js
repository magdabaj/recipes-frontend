import React from "react";
import {render, fireEvent, waitFor} from "@testing-library/react";
import CommentFormComponent from "../index";
import {test} from "@jest/globals";
import { fakeUser } from "../../../utils/testHelpers/fixtures/user";
import * as jestDOM from '@testing-library/jest-dom';
import fetchStates from "../../../utils/fetchStates";
import CommentsComponent from "../../CommentsComponent";
import commonTests from "../../../utils/testHelpers/commonTests";

expect.extend(jestDOM)

const mockedAddComment = jest.fn()

test('renders CommentForm', () => {
    const { getByRole } = render(<CommentFormComponent user={fakeUser} addComment={mockedAddComment} recipeId={'1'}/>)
    const addButton = getByRole('button')

    fireEvent.click(addButton)
    expect(addButton.textContent).toBe('Dodaj komentarz')
})

test('shows loading message', () => {
    const { getByRole } = render(<CommentFormComponent user={fakeUser} addComment={mockedAddComment} recipeId={'1'} addCommentStatus={fetchStates.fetching}/>)
    const addButton = getByRole('button')

    fireEvent.click(addButton)
    expect(addButton.textContent).toBe('Dodawanie...')
})

test('should get input value and send comment', () => {
    const { getByRole } = render(
        <CommentFormComponent
            user={fakeUser}
            addComment={mockedAddComment}
            recipeId={'1'}
        />)
    const textArea = getByRole('textarea')
    const addButton = getByRole('button')

    expect(textArea.value).toBe('')
    fireEvent.change(textArea, {target: {value: 'test'}})
    expect(textArea.value).toBe('test')
    fireEvent.click(addButton)

    waitFor(() => {
        expect(mockedAddComment).toHaveBeenCalled();
        expect(textArea.value).toBe('')
    })
})

const renderCommentForm = () =>
    render(<CommentFormComponent
        user={fakeUser}
        addComment={mockedAddComment}
        recipeId={'1'}
        />)

commonTests(renderCommentForm)