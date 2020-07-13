import {render, screen} from "@testing-library/react";
import React from "react";
import commonTests from "../../../utils/testHelpers/commonTests";
import TextInput from "../index";

const onChangeMocked = jest.fn()

const renderComponent = () =>
    render(<TextInput
        label={'Email'}
        name={'email'}
        placeholder={'Email'}
        onChange={onChangeMocked}
        error={''}
        value={'test'}
        type={'text'}
    />)

test('renders and shows no errors', () => {
    render(<TextInput
        label={'Email'}
        name={'email'}
        placeholder={'Email'}
        onChange={onChangeMocked}
        error={''}
        value={'test'}
        type={'text'}
    />)
    const inputNode = screen.getByLabelText('Email')
    expect(inputNode.value).toBe('test')
})

test('displays error message, when received a parameter', () => {
    const { getByTestId, getByLabelText } = render(<TextInput
        label={'Email'}
        name={'email'}
        placeholder={'Email'}
        onChange={onChangeMocked}
        error={'some error'}
        value={''}
        type={'text'}
    />)
    const errorMessage = getByTestId('error-message')
    const input = getByLabelText('Email')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage.innerHTML).toBe('some error')
    expect(input).toHaveClass('input input-error')
})

commonTests(renderComponent)