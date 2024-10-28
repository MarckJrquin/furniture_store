import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const UserLayout = ({ children }) => {

  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;