import '@/styles/globals.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from '@/redux';

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_URL,
    cache: new InMemoryCache(),
  });

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </Provider>
  );
}
