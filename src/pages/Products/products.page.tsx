// context
// components
import SectionHeader from '../../components/SectionHeader/section-header.component';
// imports
import { ProductType } from '../../models/products.model';
import ProductApi from '../../services/product.services';
import CategoriesApi from '../../services/categories.services';
// styles and images
import styles from './products.module.scss';
import SectionBlock from '../../components/SectionBlock/section-block.component';

const Products = () => {
  const {
    data: storeList,
    isLoading,
    ...storeQuery
  } = ProductApi.getProductPaginated('homeProducts', 0, 12);
  const { data: categoryList, isLoading: catLoading } = CategoriesApi.getAllCategories();

  return (
    <main className={styles.main_grid}>
      <SectionBlock>
        <SectionHeader title='our precisous' subtext='products' dataText='or not' />
      </SectionBlock>

      <SectionBlock>
        <div className={`${styles.wrapper} ${styles.main_grid}`}></div>
        <aside className={styles.product_filter}>
          <h3>Product categories</h3>
          <nav className={styles.filter_list} aria-label='Category list'>
            {catLoading
              ? 'No category to display'
              : categoryList?.data.map((category) => (
                  <a key={category.id} aria-label='Category item'>
                    {category.name}
                  </a>
                ))}
          </nav>
        </aside>
      </SectionBlock>
    </main>
  );
};

export default Products;
