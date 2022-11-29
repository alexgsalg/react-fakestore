import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
// redux
// components
import Header from '../components/Header/header.component';
import Footer from '../components/Footer/footer.component';
// imports
// styles and images

const DefaultLayout = () => {
  return (
    <Fragment>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
