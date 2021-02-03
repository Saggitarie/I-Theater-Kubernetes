import React from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import { Provider } from 'react-redux';
import createStore from '../stateManagement/createStore';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={createStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
