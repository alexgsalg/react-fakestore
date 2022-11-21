// plugins
import { Fragment, useEffect, useState } from 'react';
// redux
// components
import SectionHeader from '../../components/SectionHeader/section-header.component';
// imports
import { ProductType } from '../../models/products.model';
import { getProductPaginated } from '../../services/core.services';
// images
// styles
import styles from './home.module.scss';

const Home = () => {
  const [store, setStore] = useState<ProductType[]>([]);

  useEffect(() => {
    getProductPaginated().then((res) => {
      console.log(res.data);
      setStore(res.data);
    });
  }, []);

  return (
    <Fragment>
      <section id='hero' className={styles.hero}>
        <div className={styles.hero_wrapper}>
          <span className={styles.hero__detail}>Not real</span>
          <h1 className={styles.hero__title}>The best random items</h1>
          <p className={styles.hero__subtext}>A place to not find what you need</p>
        </div>
      </section>
      <section id='showcase' className={styles.basic_section}>
        <div className={styles.wrapper}>
          <SectionHeader title='Some Random' subtext='Products' dataText='showcase' />
          {store.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
