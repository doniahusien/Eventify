// _app.js
import React from 'react'
import { Fragment } from 'react';
import Layout from '@/components/layout/NavLayout';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import '../styles/fonts.css';
import { Provider } from 'react-redux';
import store from '../redux/store';


export default function App({ Component, pageProps, router }) {
  const showUserNav = router.pathname === '/attendee' || router.pathname === '/organizer'|| router.pathname === '/sponser' ;


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
