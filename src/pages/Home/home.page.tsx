import { Fragment, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
// redux
// components
import Button from '../../components/Button/button.component';
import Icon from '../../components/Icon/icon.component';
import SectionHeader from '../../components/SectionHeader/section-header.component';
import ProductCard from '../../components/ProductCard/product-card.component';
import CategoryCard from '../../components/CategoryCard/category-card.component';
// imports
import { ProductType } from '../../models/products.model';
import productApi from '../../services/product.services';
import { CategoryType } from '../../models/categories.model';
import categoriesApi from '../../services/categories.services';
// styles and images
import styles from './home.module.scss';

const Home = () => {
  const [store, setStore] = useState<ProductType[]>([]);
  const [bestSell, setBestSell] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const {
    isLoading,
    isSuccess,
    isError,
    data: storeList,
  } = useQuery('store', async () => productApi.getProductPaginated(0, 10));

  // const store = isLoading && ?? storeList.data
  useEffect(() => {
    const result = storeList?.data;
    // productApi.getProductPaginated(0, 10).then((res) => {
    console.log('Products: ', result);
    // setStore(res.data.slice(0, 4));
    // setBestSell(res.data.slice(4, 10));
    if (result) {
      setStore(result.slice(0, 4));
      setBestSell(result.slice(4, 10));
    }
    // });
  }, [isSuccess]);

  useEffect(() => {
    categoriesApi.getAllCategories().then((res) => {
      console.log('Categories: ', res.data);
      setCategories(res.data);
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
      <section id='showcase' className={styles.section_basic}>
        <SectionHeader title='Some Random' subtext='Products' dataText='showcase' />
        <div className={`${styles.wrapper} ${styles.grid_layout}`}>
          {isLoading
            ? 'Loading...'
            : store.map((item) => (
                // TODO: Add action to redirect
                <ProductCard key={item.id} data={item} />
              ))}
        </div>
      </section>

      <section id='cta-split' className={styles.section_basic}>
        <div className={`${styles.wrapper} ${styles.home_cta_grid}`}>
          <article className={styles.home_cta__item}>
            <small>20% OFF</small>
            <h3>Useless items that you will never use</h3>
            <Button
              text='Buy now'
              buttonType='base'
              size='sm'
              // TODO: insert funny action
              action={() => alert('HAHA you fool')}
              iconBefore={<Icon iconName='sell' size={16} />}
            />
          </article>
          <article className={styles.home_cta__item}>
            <small>Random deals</small>
            <h3>Test your luck and buy a random item</h3>
            <Button
              text='Buy now'
              buttonType='base'
              size='sm'
              // TODO: insert funny action
              action={() => alert('You got a golf pin')}
              iconBefore={<Icon iconName='sell' size={16} />}
            />
          </article>
        </div>
      </section>

      <section id='best-sellers' className={styles.section_basic}>
        <SectionHeader title='Best Sellers' subtext='For some reason' dataText='products' />
        <div className={`${styles.wrapper} ${styles.bestseller_grid}`}>
          {isLoading
            ? 'Loading...'
            : bestSell.map((item) => (
                // TODO: Add action to redirect
                <ProductCard
                  key={item.id}
                  data={item}
                  isBestSeller={true}
                  className={styles.bestseller__item}
                />
              ))}
        </div>
      </section>

      <section id='home-categories' className={styles.section_odd}>
        <SectionHeader title='our categories' subtext='At least that' dataText='categories' />
        <div className={`${styles.wrapper} ${styles.categories_grid}`}>
          {categories.map((item) => (
            // TODO: Add action to redirect
            <CategoryCard key={item.id} data={item} className={styles.categories__item} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};;;;

export default Home;
