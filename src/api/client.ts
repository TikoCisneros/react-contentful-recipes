import { ApolloClient, InMemoryCache } from '@apollo/client';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const SPACE_ID = import.meta.env.VITE_SPACE_ID;
const CDA_TOKEN = import.meta.env.VITE_CDA_TOKEN;

const client = new ApolloClient({
  uri: `${BASE_URL}${SPACE_ID}`,
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer ${CDA_TOKEN}`,
  },
});

export default client;