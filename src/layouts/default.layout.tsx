import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
// redux
// components
import Header from '../components/Header/header.component';
import CartDrawer from '../components/CartDrawer/cart-drawer.component';
// imports
// styles and images

const DefaultLayout = () => {
  return (
    <Fragment>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default DefaultLayout;
