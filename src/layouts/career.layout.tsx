import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
// context
// components
import Header from '../components/Header/header.component';
// imports
// styles and images

const CareerLayout = () => {
  return (
    <Fragment>
      <Header />

      <main className='main'>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default CareerLayout;
