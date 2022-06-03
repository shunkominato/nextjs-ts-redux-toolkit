import '../styles/globals.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
