import { HOST } from "@/constants"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Bank } from "@/types"


export const bankApi = createApi({
  reducerPath: "bankApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${HOST}` }),
  endpoints: (builder) => ({
    getBankById: builder.query<Bank, number>({
      query: (id) => `bank/${id}`,
    }),
    getBanks: builder.query<Bank[], void>({
      query: () => `bank/all`,
    }),
  }),
})

export const { useGetBanksQuery, useGetBankByIdQuery } = bankApi
