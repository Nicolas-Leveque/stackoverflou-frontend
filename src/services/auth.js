import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND }),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (loginObj) => ({
				url: '/user/login',
				method: 'POST',
				body: loginObj,
			}),
		}),
		register: builder.mutation({
			query: (registerObj) => ({
				url: '/user/register',
				method: 'POST',
				body: registerObj,
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
