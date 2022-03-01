import { createSlice } from '@reduxjs/toolkit';

// console.log(localStorage.getItem('user'));
// const initialUser = localStorage.getItem('user')
// 	? JSON.parse(localStorage.getItem('user'))
// 	: null;

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		nickName: '',
		email: '',
		token: '',
	},
	reducers: {
		onLogin: (state, action) => {
			state = action.payload;
			localStorage.setItem('user', state.nickName);
			localStorage.setItem('token', state.token);
		},
		onRegister: (state, action) => {
			state = action.payload;
			localStorage.setItem('user', state.nickName);
			localStorage.setItem('token', state.token);
		},
	},
});

export const selectAuth = (state) => state.auth;

export const { onLogin, onRegister } = authSlice.actions;
