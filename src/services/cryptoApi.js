import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '7907c81ff7msh30a56721cac7000p18d209jsn31da31cef6d3',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  })
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

//import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//
// Note: Change v1 to v2 on rapid api

// const cryptoApiHeaders = {
//   'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//   'x-rapidapi-key': '7907c81ff7msh30a56721cac7000p18d209jsn31da31cef6d3',
// }
// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//   reducerPath: 'cryptoApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: (count) => createRequest(`/coins?limit=${count}`),
//     }),

//     getCryptoDetails: builder.query({
//       query: (coinId) => createRequest(`/coin/${coinId}`),
//     }),

//     // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
//     getCryptoHistory: builder.query({
//       query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
//     }),

//     // Note: To access this endpoint you need premium plan
//     getExchanges: builder.query({
//       query: () => createRequest('/exchanges'),
//     }),
//   }),
// });

// export const {
//   useGetCryptosQuery,
//   useGetCryptoDetailsQuery,
//   useGetExchangesQuery,
//   useGetCryptoHistoryQuery,
// } = cryptoApi;