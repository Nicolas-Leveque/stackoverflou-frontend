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
			console.log('reducer', state);
		},
	},
});

export const selectAuth = (state) => state.auth;

export const { onLogin } = authSlice.actions;

// export const login = (loginObject) => async (dispatch) => {
// 	try {
// 		fetch(`${process.env.REACT_APP_BACKEND}/user/login`, {
// 			method: 'post',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(loginObject),
// 		})
// 			.then((response) => {
// 				if (!response.ok) {
// 					throw new Error('Erreur de connexion');
// 				}
// 				return response.json();
// 			})
// 			.then((json) => {
// 				dispatch(onLogin(json));
// 				console.log('end login', json);
// 			});
// 	} catch (e) {
// 		return console.log(e);
// 	}
// };
