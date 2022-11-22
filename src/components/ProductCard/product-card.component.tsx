// plugins
// components
// imports
import { ProductCardProps } from '../../models/products.model';
// styles
import styles from './product-card.module.scss';

const ProductCard = ({ data, clickAction }: ProductCardProps) => {
  const { id, title, price, images } = data;
  return (
    <article className={styles.product}>
      <h2 className={styles.product__title}>{title}</h2>
      {/* <p className={styles.section_header__subtext}>{subtext}</p> */}
    </article>
  );
};

export default ProductCard;
