import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {render, screen, waitFor} from "@testing-library/react";
import * as jestDOM from '@testing-library/jest-dom';
import CommentsComponent from "../index";
import {fakeUser, loggedOutUser} from "../../../utils/testHelpers/fixtures/user";
import {fakeComments} from "../../../utils/testHelpers/fixtures/coments";
import commonTests from "../../../utils/testHelpers/commonTests";
import {renderWithRouter} from "../../../utils/testHelpers";
import userEvent from "@testing-library/user-event";

expect.extend(jestDOM)
const mockedAddComment = jest.fn()
const removeCommentMocked = jest.fn()
const getCommentsMocked = jest.fn()

test('renders CommentsComponent', () => {
    render(<CommentsComponent
        user={fakeUser}
        addComment={mockedAddComment}
        recipeId={'1'}
        removeComment={removeCommentMocked}
        getComments={getCommentsMocked}
        comments={fakeComments}
    />)
    const commentForm = screen.getByLabelText(/dodaj komentarz/i)
    expect(commentForm).toBeInTheDocument()
})

test('renders CommentsComponent without comment form', async () => {
    render(<Router>
            <CommentsComponent
            user={loggedOutUser}
            addComment={mockedAddComment}
            recipeId={'1'}
            removeComment={removeCommentMocked}
            getComments={getCommentsMocked}
            comments={fakeComments}
        />
    </Router>)
    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Musisz sie zalogowac zeby dodac komentarz')
    expect(screen.queryByLabelText(/dodaj komentarz/i)).not.toBeInTheDocument()
})

const renderCommentsComponent = () => renderWithRouter(<CommentsComponent
    user={fakeUser}
    addComment={mockedAddComment}
    recipeId={'1'}
    removeComment={removeCommentMocked}
    getComments={getCommentsMocked}
    comments={fakeComments}
/>)

commonTests(renderCommentsComponent)

test('calls removeComment action when user is logged in', async () => {
    renderCommentsComponent()
    expect(screen.queryAllByText(/usuń/i)[0]).toBeInTheDocument()
    const removeCommentButton = screen.getAllByText(/usuń/i)

    userEvent.click(removeCommentButton[0])
    expect(removeCommentMocked).toHaveBeenCalledTimes(1)
    expect(removeCommentMocked).toHaveBeenCalledWith(1)
})