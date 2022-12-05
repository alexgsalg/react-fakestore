// context
// components
import SectionHeader from '../../components/SectionHeader/section-header.component';
import SectionBlock from '../../components/SectionBlock/section-block.component';
import WrapperBlock from '../../components/WrapperBlock/wrapper-block.component';
import ListFilter from '../../components/ListFilter/list-filter.component';
// imports
import ProductApi from '../../services/product.services';
import CategoriesApi from '../../services/categories.services';
// styles and images
import styles from './products.module.scss';

const Products = () => {
  const {
    data: storeList,
    isLoading,
    ...storeQuery
  } = ProductApi.getProductPaginated('homeProducts', 0, 12);

  return (
    <main className={styles.main_grid}>
      <SectionBlock>
        <SectionHeader title='our precisous' subtext='products' dataText='or not' />
      </SectionBlock>

      <SectionBlock>
        <WrapperBlock style={styles.main_grid}>
          <ListFilter />
        </WrapperBlock>
      </SectionBlock>
    </main>
  );
};

export default Products;
