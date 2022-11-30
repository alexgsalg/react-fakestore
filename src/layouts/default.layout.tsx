import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
// redux
// components
import Header from '../components/Header/header.component';
import Footer from '../components/Footer/footer.component';
// imports
// styles and images
import styles from './default.module.scss';

const DefaultLayout = () => {
  return (
    <Fragment>
      <Header />
      <main className={styles.default_main}>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
