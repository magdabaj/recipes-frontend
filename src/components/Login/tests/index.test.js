import React from "react";
import {render, waitFor, screen} from "@testing-library/react";
import Login from "../index";
import * as jestDOM from '@testing-library/jest-dom';
import fetchStates from "../../../utils/fetchStates";
import { renderWithRouter } from "../../../utils/testHelpers";
import axios from 'axios'
import commonTests from "../../../utils/testHelpers/commonTests";

expect.extend(jestDOM)

const signInMocked = jest.fn()
const signUpMocked = jest.fn()


jest.mock('axios')

test('renders Login form', () => {
    const { getByRole } = render(<Login signIn={signInMocked} signUp={signUpMocked}/>)
    const loginButton = getByRole('submit')
    const registerButton = getByRole('register')

    expect(loginButton.textContent).toBe('Zaloguj się')
    expect(registerButton.textContent).toBe('Zarejestruj się')
})

test('renders Login form', () => {
    const { getByRole } = render(<Login signIn={signInMocked} signUp={signUpMocked} status={fetchStates.fetching}/>)
    const loginButton = getByRole('submit')
    const registerButton = getByRole('register')

    expect(loginButton.textContent).toBe('Ladowanie...')
    expect(registerButton.textContent).toBe('Ladowanie...')
})

test('redirects if user logs in successfully', () => {
    const redirectUrl = '/user-recipes'

    const { history } = renderWithRouter(<Login signIn={signInMocked} signUp={signUpMocked} status={fetchStates.success}/> )

    waitFor(() => {
        expect(axios).toHaveBeenCalled()
    })
    expect(history.location.pathname).toEqual(redirectUrl)
})

const renderLogin = () =>
    render(<Login signIn={signInMocked} signUp={signUpMocked}/>)

commonTests(renderLogin)
// todo should I test toasts?