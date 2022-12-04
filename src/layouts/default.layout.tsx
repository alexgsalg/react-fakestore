import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
// context
// components
import Header from '../components/Header/header.component';
import Footer from '../components/Footer/footer.component';
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
