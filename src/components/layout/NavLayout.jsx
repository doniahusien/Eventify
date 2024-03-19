// Layout.js
import React from 'react';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import UserNav from '../shared/UserNav';

const Layout = ({ children, userNav = false }) => {
  return (
    <div>
      {userNav ? <UserNav /> : <Nav />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
