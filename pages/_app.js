import store from '@/redux';
import '@/styles/globals.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_URL,
    cache: new InMemoryCache(),
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}
