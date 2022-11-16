// plugins
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
// redux
// components
import Header from '../components/Header/header.component';
// imports
// images
// styles

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
