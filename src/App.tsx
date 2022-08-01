// see more https://medium.com/@malkhan52/setup-contentful-and-graphql-apollo-client-in-react-native-844d921e6ba9
import { ApolloProvider } from '@apollo/client';
import client from './api/client';
import Layout from './components/Layout';
import Router from './routes/Router';

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Router />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
