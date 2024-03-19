// _app.js
import { Fragment } from 'react';
import Layout from '@/components/layout/NavLayout';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import '../styles/fonts.css';
import { Provider } from 'react-redux';
import { store } from '../store';

export default function App({ Component, pageProps, router }) {
  const showUserNav = router.pathname === '/attendee';

  return (
    <Fragment>
      <Provider store={store}>
        <Layout userNav={showUserNav}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  );
}
