import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
// components
// imports
import { ProductCardProps } from '../../models/products.model';
// styles
import styles from './product-card.module.scss';

const ProductCard = ({
  data,
  clickAction,
  className,
  showRating = true,
  isBestSeller = false,
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
  return (
    <article
      className={`${styles.product} ${className ? className : null}`}
      onClick={onClickAction}>
      <figure className={styles.product__image}>
        <img src={images[0]} alt={`Product ${title}`} />
      </figure>
      <h3 className={styles.product__title}>{title}</h3>
      {showRating ? (
        <Rating
          readonly={true}
          allowFraction={true}
          initialValue={isBestSeller ? 5 : randomRating}
          fillColor='hsl(21, 100%, 62%)'
          size={14}
        />
      ) : null}
      <p className={styles.product__price}>${price}</p>
    </article>
  );
};

export default ProductCard;
