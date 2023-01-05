import { useEffect, useState } from 'react';
// context
// components
import { SectionBlock, SectionHeader, WrapperBlock, GridBlock } from '../../component-structures';
import AsideFilter from '../../components/AsideFilter/aside-filter.component';
import ProductCard from '../../components/ProductCard/product-card.component';
import LoadingIcon from '../../components/Loading/loading.component';
// imports
import { ProductType } from '../../models/products.model';
import ProductApi from '../../services/product.services';
// hooks
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
// styles and images
import styles from './products.module.scss';

const Products = () => {
  const cardOrientation = useCheckMobileScreen();
  const [horizontalCard, setHorizontalCard] = useState<boolean>(false);
  const {
    data: storeList,
    isLoading,
    ...storeQuery
  } = ProductApi.getProductPaginated('paginatedProducts', 0, 12);

  useEffect(() => {
    setHorizontalCard(cardOrientation);
  }, [cardOrientation]);

  return (
    <main>
      <SectionBlock customClass='no_margin'>
        <SectionHeader title='our precisous' subtext='products' dataText='or not' />
      </SectionBlock>

      <SectionBlock>
        <WrapperBlock customClass={styles.grid_with_filter}>
          <AsideFilter />
          {/* grid block */}
          {isLoading ? (
            <LoadingIcon />
          ) : (
            <GridBlock xs={1} sm={1} md={2} lg={3} xl={4}>
              {/* <div className={styles.products_list}> */}
              {storeList?.data?.map((item: ProductType) => (
                // TODO: Add action to redirect
                <ProductCard key={item.id} data={item} isHorizontal={horizontalCard} />
              ))}
              {/* </div> */}
            </GridBlock>
          )}
        </WrapperBlock>
      </SectionBlock>
    </main>
  );
};

export default Products;
