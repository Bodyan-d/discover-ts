import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUser } from './auth-operations';

const initialUserState = {
	id: null,
	name: null,
	email: null,
	password: null,
};

const user = createReducer(initialUserState, {
	[register.fulfilled]: (_, { payload }) => payload.data,
	[logIn.fulfilled]: (_, { payload }) => payload.data,
	[logOut.fulfilled]: () => initialUserState,
	[getCurrentUser.fulfilled]: (_, { payload }) => console.log(payload),
});

const setError = (_, { payload }) => payload;

const token = createReducer(null, {
	[logIn.fulfilled]: (_, { payload }) => payload.data.token,
	[logOut.fulfilled]: () => null,
});

const error = createReducer(null, {
	[register.rejected]: setError,
	[register.pending]: null,
	[register.fulfilled]: null,
	[logIn.rejected]: setError,
	[logIn.pending]: null,
	[logIn.fulfilled]: null,
	[logOut.rejected]: setError,
	[logOut.pending]: null,
	[logOut.fulfilled]: null,
	[getCurrentUser.rejected]: setError,
	[getCurrentUser.pending]: null,
	[getCurrentUser.fulfilled]: null,
});

const isAuthenticated = createReducer(false, {
	[register.fulfilled]: () => false,
	[logIn.fulfilled]: () => true,
	[logOut.fulfilled]: () => false,
	[getCurrentUser.fulfilled]: () => true,
});

export default combineReducers({
	user,
	error,
	token,
	isAuthenticated,
});
