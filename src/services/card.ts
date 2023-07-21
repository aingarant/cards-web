import { HOST } from "@/constants"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Card } from "@/types"

export const cardApi = createApi({
  reducerPath: "cardApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${HOST}` }),
  endpoints: (builder) => ({
    getCard: builder.query<Card, string>({
      query: (cardId) => `card/${cardId}`,
    }),
    getCards: builder.query<Card[], string>({
      query: (bankId) => `cards/${bankId}`,
    }),
    getAllCards: builder.query<Card[], string>({
      query: () => `cards/all`,
    }),

    getCardsByBankId: builder.query<Card[], string>({
      query: (bankId) => `cards/${bankId}`,
    }),
  }),
})

export const {
  useGetCardQuery,
  useGetCardsQuery,
  useGetAllCardsQuery,
  useLazyGetCardsByBankIdQuery,
} = cardApi
