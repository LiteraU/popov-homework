import * as yup from 'yup';
import {useFormik} from 'formik';
import React, {useCallback, useContext, useState} from 'react';
import {useTouchedError} from '../utils';
import axios, {AxiosInstance} from "axios";

export interface IApiProviderContext {
    api: AxiosInstance;
}

export let ApiProviderContext = React.createContext<IApiProviderContext>({
    api: axios.create(),
});


export interface IAuthProviderContext {
    authState: AuthState;
    setToken: (token: string) => void;
}

export function useApi() {
    let { api } = useContext(ApiProviderContext);
    return api;
}

export enum AuthState {
    loading = 'loading',
}

export function useSignInLogic() {
    let api = useApi()
    let [errorMessage, setErrorMessage] = useState('');
    let validationSchema = yup.object().shape({
        login: yup
            .string()
            .max(25, 'Максисум не более 25 символов')
            .matches(
                /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/,
                'Пожалуйста введите емайл или номер телефона',
            )
            .required('Поле обязательно'),
        password: yup
            .string()
            .max(25, 'Максисум не более 25 символов')
            .min(6, 'Минимум 6 символов')
            .required('Поле обязательно для заполнения'),
    });


    let handleSubmit = useCallback(
        async ({ login, password }: { login: string; password: string }) => {
            try {
                setErrorMessage('');
                return await api.post('auth', {
                    identifier: login,
                    password,
                })
            } catch (error) {
                setErrorMessage('Неправильный логин или пароль');
            }
        },
        [api],
    );

    let signInForm = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        onSubmit: handleSubmit,
        validationSchema,
        validateOnBlur: true,
        validateOnChange: true,
    });

    let { touchedError: emailTouchedError } = useTouchedError(
        signInForm,
        'login',
    );

    let { touchedError: passwordTouchedError } = useTouchedError(
        signInForm,
        'password',
    );

    return {
        signInForm,
        errorMessage,
        emailTouchedError,
        passwordTouchedError,
    };
}
