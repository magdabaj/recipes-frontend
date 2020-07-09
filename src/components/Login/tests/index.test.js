import React from "react";
import { render } from "@testing-library/react";
import Login from "../index";
import * as jestDOM from '@testing-library/jest-dom';
import fetchStates from "../../../utils/fetchStates";

expect.extend(jestDOM)

const signInMocked = jest.fn()
const signUpMocked = jest.fn()

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

// todo should I test toasts?