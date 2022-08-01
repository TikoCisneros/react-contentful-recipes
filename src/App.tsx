// see more https://medium.com/@malkhan52/setup-contentful-and-graphql-apollo-client-in-react-native-844d921e6ba9
import { ApolloProvider } from '@apollo/client';
import client from './api/client';
import Router from './routes/Router';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
