import { useEffect, useState } from 'react';
// context
// components
import { GridBlock, SectionBlock, SectionHeader, WrapperBlock } from '../../component-structures';
import Button from '../../components/Button/button.component';
import Icon from '../../components/Icon/icon.component';
import LoadingIcon from '../../components/Loading/loading.component';
import ProductCard from '../../components/ProductCard/product-card.component';
import CategoryCard from '../../components/CategoryCard/category-card.component';
// imports
import { ProductType } from '../../models/products.model';
import ProductApi from '../../services/product.services';
import CategoriesApi from '../../services/categories.services';
// styles and images
import styles from './home.module.scss';

const Home = () => {
  const [store, setStore] = useState<ProductType[]>([]);
  const [bestSell, setBestSell] = useState<ProductType[]>([]);

  const { data: storeList, ...storeQuery } = ProductApi.getProductPaginated('homeProducts', 1, 10);
  const { data: categoryList } = CategoriesApi.getCategoriesPaginated('displayCategories', 0, 8);

  // store Query
  useEffect(() => {
    const result = storeList?.data;
    if (result) {
      setStore(result.slice(0, 4));
      setBestSell(result.slice(4, 10));
    }
  }, [storeList]);

  return (
    <main>
      <section id='hero' className={styles.hero} aria-label='hero section'>
        <div className={styles.hero_wrapper}>
          <span className={styles.hero__detail}>Not real</span>
          <h1 className={styles.hero__title}>The best random items</h1>
          <p className={styles.hero__subtext}>A place to not find what you need</p>
        </div>
      </section>

      <SectionBlock id='showcase'>
        <SectionHeader title='Some Random' subtext='Products' dataText='showcase' />
        <WrapperBlock>
          {storeQuery.isLoading ? (
            <LoadingIcon />
          ) : (
            <GridBlock xs={2} sm={3} md={4} customClass={styles.grid_layout}>
              {store.map((item) => (
                // TODO: Add action to redirect
                <ProductCard key={item.id} data={item} />
              ))}
            </GridBlock>
          )}
        </WrapperBlock>
      </SectionBlock>

      <SectionBlock id='cta-split'>
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
      </SectionBlock>

      <SectionBlock id='best-sellers'>
        <SectionHeader title='Best Sellers' subtext='For some reason' dataText='products' />
        <WrapperBlock>
          {storeQuery.isLoading ? (
            <LoadingIcon />
          ) : (
            <GridBlock xs={2} sm={4} md={3} lg={3} xl={4} customClass={styles.bestseller_grid}>
              {bestSell.map((item) => (
                // TODO: Add action to redirect
                <ProductCard
                  key={item.id}
                  data={item}
                  isBestSeller={true}
                  className={styles.bestseller__item}
                />
              ))}
            </GridBlock>
          )}
        </WrapperBlock>
      </SectionBlock>

      <SectionBlock id='home-categories' type={'odd'}>
        <SectionHeader title='our categories' subtext='At least that' dataText='categories' />
        <WrapperBlock>
          <GridBlock xs={2} sm={3} lg={4} customClass={styles.categories_grid}>
            {categoryList?.data.map((item) => (
              // TODO: Add action to redirect
              <CategoryCard key={item.id} data={item} className={styles.categories__item} />
            ))}
          </GridBlock>
        </WrapperBlock>
      </SectionBlock>
    </main>
  );
};

export default Home;
