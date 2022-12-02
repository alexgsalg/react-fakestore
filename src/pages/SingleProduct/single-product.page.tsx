import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// context
// components
import Icon from '../../components/Icon/icon.component';
import Button from '../../components/Button/button.component';
import ImgLightbox from '../../components/ImgLightbox/img-lightbox.component';
// imports
import { ProductType } from '../../models/products.model';
import ProductApi from '../../services/product.services';
// images
import { ReactComponent as CartIcon } from '/src/assets/images/icon-cart.svg';
// styles
import styles from './single-product.module.scss';

const SingleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [count, setcount] = useState<number>(0);
  const [openLightbox, setOpenLightbox] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const {
    data: productItem,
    isLoading,
    isError,
    ...productQuery
  } = ProductApi.getProductById(params.id!);

  useEffect(() => {
    if (!isLoading) setSelectedImage(productItem?.data.images[0]);
  }, []);

  const closeModal = () => setOpenLightbox(!openLightbox);

  const onSelectImage = (image: string): void => {
    console.log(image);
    setSelectedImage(image);
  };

  const addToCount = () => setcount(count + 1);
  const removeFromCount = () => (count > 0 ? setcount(count - 1) : count);

  if (isError) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className={styles.wrapper}>
      <div className={styles.product_display}>
        <img
          className={styles.display__selected}
          src={selectedImage}
          alt='Image selected'
          onClick={() => setOpenLightbox(true)}
        />
        <div className={styles.display_grid}>
          {/* list */}
          {product?.images
            ? product?.images.map((image, idx: number) => (
                <picture
                  key={idx}
                  className={`${styles.display__img} ${
                    selectedImage === image ? styles.selected : ''
                  }`}
                  onClick={() => onSelectImage(image)}>
                  <img src={image} alt='' />
                </picture>
              ))
            : null}
        </div>
      </div>
      {/* Informations about product */}
      <div className={styles.product_info}>
        <span className={styles.product__store}>{product?.store}</span>
        <h1 className={styles.product__title}>{product?.title}</h1>
        <p className={styles.product__description}>{product?.description}</p>
        <span className={styles.product__price}>${product?.price.toFixed(2)}</span>

        <div className={styles.product_actions}>
          <div className={styles.action_quantity_select}>
            <Icon
              iconName='remove'
              className={styles.action__icon}
              actionOnClick={removeFromCount}
            />
            <span className={styles.action__quantity}>{count}</span>
            <Icon iconName='add' className={styles.action__icon} actionOnClick={addToCount} />
          </div>

          <Button text='Add to cart' iconBefore={<CartIcon />} action={addToCount} />
        </div>
      </div>
      {/* TODO: Lightbox Next and Prev */}
      <ImgLightbox img={selectedImage} isOpen={openLightbox} onclose={closeModal} />
    </div>
  );
};

export default SingleProduct;
