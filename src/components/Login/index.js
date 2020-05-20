/**
 *
 * LoginFormComponent
 *
 */

import React, { useState } from 'react';
import TextInput from '../TextInput';
import '../../containers/App/index.css';
import Button, { ButtonSmall } from './Button';
import fetchStates from '../../utils/fetchStates'
import {Redirect} from "react-router";
import {toast} from "react-toastify";

function Login({ user, signIn, signUp, error, setError, status }) {
    const [userSubmit, setUser] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;

        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const formIsValid = () => {
        const { email, password } = userSubmit;
        const errors = {};

        if (!email) errors.email = 'Email is required';
        if (!password) errors.password = 'Password is required';

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        try {
            signUp({ email: userSubmit.email, password: userSubmit.password });
        } catch (error) {
            setErrors({ handleSave: error.message });
        }
    }

    function handleSignIn(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        try {
            signIn({ email: userSubmit.email, password: userSubmit.password });
        } catch (error) {
            setErrors({ handleSave: error.message });
        }
    }

    // if (error) {
    //   toast.error(error);
    //   setError();
    // }
    return (
        <div className={'form-container'}>
            <form className={'form'} onSubmit={handleSignIn}>
                <TextInput
                    type={'text'}
                    name={'email'}
                    label={'Email'}
                    value={userSubmit.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder={'Email'}
                />
                <TextInput
                    type={'password'}
                    name={'password'}
                    label={'Hasło'}
                    value={userSubmit.password}
                    onChange={handleChange}
                    error={errors.password}
                    placeholder={"Hasło"}
                />
                <Button type={'submit'} onSubmit={handleSignIn}>
                    {status === fetchStates.fetching
                        ? 'Ladowanie...'
                        : 'Zaloguj się'}
                </Button>
                <div className={'sign-up'}>
                    <div>Nie masz jeszcze konta?</div>
                    <ButtonSmall type={'button'} onClick={handleSave}>
                        {status === fetchStates.fetching
                            ? 'Ladowanie...'
                            : 'Zarejestruj się'}
                    </ButtonSmall>
                </div>
            </form>
            {status === fetchStates.success && <Redirect to={'/user-recipes'}/>}
            {/*{status === fetchStates.error && toast.error(error)}*/}
        </div>
    );
}

Login.propTypes = {};

export default Login;
