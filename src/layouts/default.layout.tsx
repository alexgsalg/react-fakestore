import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
// context
// components
import Header from '../component-structures/Header/header.component';
import Footer from '../component-structures/Footer/footer.component';
// imports

const DefaultLayout = () => {
  return (
    <Fragment>
      <Header />

      <Outlet />

      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
