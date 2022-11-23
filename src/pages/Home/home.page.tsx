// plugins
import { Fragment, useEffect, useState } from 'react';
import Button from '../../components/Button/button.component';
import Icon from '../../components/Icon/icon.component';
import ProductCard from '../../components/ProductCard/product-card.component';
// redux
// components
import SectionHeader from '../../components/SectionHeader/section-header.component';
// imports
import { ProductType } from '../../models/products.model';
import api from '../../services/core.services';
// import { getProductPaginated } from '../../services/core.services';
// images
// styles
import styles from './home.module.scss';

const Home = () => {
  const [store, setStore] = useState<ProductType[]>([]);

  useEffect(() => {
    api.getProductPaginated(0, 4).then((res) => {
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
            // TODO: Add action to redirect
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </section>

      <section id='cta-split' className={styles.split_section}>
        <div className={`${styles.wrapper} ${styles.grid_half}`}>
          <article>
            <small>20% OFF</small>
            <h3>Useless items that you will never use</h3>
            <Button
              text='Buy now'
              buttonType='base'
              size='sm'
              action={() => alert('HAHA you fool')}
              iconBefore={<Icon iconName='sell' size={16} />}
            />
          </article>
          <article>
            <small>Random deals</small>
            <h3>Test your luck and buy a random item</h3>
            <Button
              text='Buy now'
              buttonType='base'
              size='md'
              action={() => alert('You got a golf pin')}
              iconBefore={<Icon iconName='sell' size={16} />}
            />
            <Button
              text='Buy now'
              buttonType='base'
              size='lg'
              action={() => alert('HAHA you fool')}
              iconBefore={<Icon iconName='sell' />}
            />
          </article>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
