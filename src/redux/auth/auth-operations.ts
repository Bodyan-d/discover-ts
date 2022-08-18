import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import cookie from '../../services/cookies.js';
import Cookies from 'js-cookie';
// const myVar = process;
import React from 'react';
import env from 'react-dotenv';
console.log(env.BACK_END);

const token = {
	set(token: string) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

export const register: any = createAsyncThunk(
	'auth/register',
	async credentials => {
		try {
			const res = await axios.post(
				`${env.BACK_END}/user/registration`,
				credentials
			);

			return res.data;
		} catch (err: any) {
			if (err.res.status === 409) {
				return new Error('Вы уже зарегистрированы');
			}
			if (err.res.status === 400) {
				new Error('Некорректные данные, попробуйте еще раз');
			}

			new Error('Что-то пошло не так. Повторите попытку позже');
		}
	}
);

export const logIn: any = createAsyncThunk('auth/login', async credentials => {
	try {
		const res = await axios.post(`${env.BACK_END}/user/login`, credentials);
		console.log(res.data.data);

		token.set(res.data.data.token);
		Cookies.set('token', res.data.data.token, {
			path: '/',
			expires: 365,
		});

		return res.data;
	} catch (err: any) {
		if (err.response.status === 401) {
			return new Error(
				'Неверные данные. Проверьте логин и пароль или зарегистрируйтесь'
			);
		}
		if (err.response.status === 400) {
			new Error('Некорректные данные, попробуйте еще раз');
		}
		return new Error('Что-то пошло не так. Повторите попытку позже');
	}
});

export const logOut: any = createAsyncThunk(
	'auth/logout',
	async (_, { rejectWithValue }) => {
		try {
			await axios.get(`${env.BACK_END}/user/logout`);

			token.unset();
			Cookies.remove('token', { path: '/' });
		} catch (err: any) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const getCurrentUser: any = createAsyncThunk(
	'auth/getCurrentUser',
	async (_, thunkAPI: any) => {
		const Token: any = Cookies.get('token');

		token.set(Token);

		try {
			const { data: response } = await axios.get(
				`${env.BACK_END}/user/profile`
			);

			return response.data;
		} catch (err: any) {
			if (err.response.status === 409) {
				return new Error('Введите логин и пароль');
			}
			return new Error(err.response.data);
		}
	}
);
