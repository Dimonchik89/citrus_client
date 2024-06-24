import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const phoneApi = createApi({
	reducerPath: "phoneApi",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
	endpoints: (builder) => ({
		postPhone: builder.mutation<any, { phone: string }>({
			query: ({ phone }) => ({
				url: "/phone",
				method: "POST",
				body: { phone },
			}),
		}),
	}),
})

export const { usePostPhoneMutation } = phoneApi
