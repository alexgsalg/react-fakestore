import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
// components
// imports
import { ProductCardProps } from '../../models/products.model';
import Button from '../Button/button.component';
import Icon from '../Icon/icon.component';
// styles
import styles from './product-card.module.scss';

const ProductCard = ({
  data,
  clickAction,
  className,
  showRating = true,
  isBestSeller = false,
  isHorizontal = false,
}: ProductCardProps) => {
  const [randomRating, setRandomRating] = useState(0);

  useEffect(() => {
    setRandomRating(Math.floor(Math.random() * (5 - 1 + 1) + 1));
  }, []);

  const onClickAction = () => {
    console.log('poduct id: ', id);
    // clickAction
  };

  const { id, title, price, images } = data;
  const cardOrientation = isHorizontal ? styles.horizontal : '';

  return (
    <article className={`${styles.product} ${cardOrientation} ${className ? className : ''}`}>
      <figure className={styles.product__image} onClick={onClickAction}>
        <img src={images[0]} alt={`Product ${title}`} />
      </figure>
      <div className={styles.product_info}>
        <div>
          <h3 className={styles.product__title} onClick={onClickAction}>
            {title}
          </h3>
          {showRating ? (
            <Rating
              readonly={true}
              allowFraction={true}
              initialValue={isBestSeller ? 5 : randomRating}
              fillColor='hsl(21, 100%, 62%)'
              size={14}
            />
          ) : null}
        </div>
        <div className={styles.product_footer}>
          <p className={styles.product__price}>${price}</p>
          <span>
            <Icon iconName='shopping_bag' size={18} className={styles.add_icon} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
