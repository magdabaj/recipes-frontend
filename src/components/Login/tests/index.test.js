import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../index";
import * as jestDOM from '@testing-library/jest-dom';
import fetchStates from "../../../utils/fetchStates";
import { renderWithRouter } from "../../../utils/testHelpers";
import commonTests from "../../../utils/testHelpers/commonTests";
import {axe} from "jest-axe";
import userEvent from "@testing-library/user-event";

expect.extend(jestDOM)

const signInMocked = jest.fn()
const signUpMocked = jest.fn()


jest.mock('axios')

const renderLogin = () =>
    render(<Login signIn={signInMocked} signUp={signUpMocked}/>)

commonTests(renderLogin)

test('checks if form has any violations', async () => {
    const { container } = renderLogin()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
})

test('renders Login form', () => {
    render(<Login signIn={signInMocked} signUp={signUpMocked}/>)
    const loginButton = screen.getByText(/Zaloguj się/i)
    const registerButton = screen.getByText(/Zarejestruj się/i)

    expect(loginButton).toBeInTheDocument()
    expect(registerButton).toBeInTheDocument()
})

test('renders Login form', () => {
    render(<Login signIn={signInMocked} signUp={signUpMocked} status={fetchStates.fetching}/>)
    const buttons = screen.getAllByText(/ladowanie.../i)

    expect(buttons[1]).toBeInTheDocument()
    expect(buttons[0]).toBeInTheDocument()
})

test('redirects if user logs in successfully', async () => {
    const redirectUrl = '/user-recipes'

    const { history } = renderWithRouter(<Login signIn={signInMocked} signUp={signUpMocked} status={fetchStates.success}/> )

    expect(history.location.pathname).toEqual(redirectUrl)
})

test('sends signUp action if form is valid', () => {
    renderLogin()
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/hasło/i)
    const signInButton = screen.getByText(/zaloguj się/i)

    userEvent.type(emailInput, 'test')
    userEvent.type(passwordInput, 'test')
    userEvent.click(signInButton)
    expect(signInMocked).toHaveBeenCalled()
    expect(signInMocked).toHaveBeenCalledTimes(1)
    expect(signInMocked).toHaveBeenCalledWith({
        email: 'test',
        password: 'test',
    })
})

test('shows error message when trying to submit empty form', () => {
    renderLogin()
    const signInButton = screen.getByText(/zaloguj się/i)
    let errorMessage = screen.queryByText(/musisz wpisać email/i)

    expect(errorMessage).not.toBeInTheDocument()
    userEvent.click(signInButton)
    expect(signInMocked).not.toHaveBeenCalled()
    errorMessage = screen.getByText(/musisz wpisać email/i)
    expect(errorMessage).toBeInTheDocument()
})


// todo should I test toasts?