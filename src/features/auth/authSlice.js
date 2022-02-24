import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		nickName: '',
		email: 'test@email.com',
		token: '',
		isFetching: false,
	},
	reducers: {},
});

export const selectAuth = (state) => state.auth;
