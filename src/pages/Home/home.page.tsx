// plugins
import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/product-card.component';
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
    getProductPaginated(0, 4).then((res) => {
      console.log(res.data);
      setStore(res.data);
    });
  }, []);

  return (
    <Fragment>
      <section id='hero' className={styles.hero} aria-label='hero section'>
        <div className={styles.hero_wrapper}>
          <span className={styles.hero__detail}>Not real</span>
          <h1 className={styles.hero__title}>The best random items</h1>
          <p className={styles.hero__subtext}>A place to not find what you need</p>
        </div>
      </section>
      <section id='showcase' className={styles.basic_section}>
        <SectionHeader title='Some Random' subtext='Products' dataText='showcase' />
        <div className={`${styles.wrapper} ${styles.grid_layout}`}>
          {store.map((item) => (
            <ProductCard key={item.id} data={item} />
            // <article>{item.title}</article>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
