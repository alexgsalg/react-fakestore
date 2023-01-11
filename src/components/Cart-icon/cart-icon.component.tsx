import { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
// context
import { selectCarCount } from '../../store/cart/cart.selector';
// components
// imports
// images
import { ReactComponent as CartIconSvg } from '../../assets/images/icon-cart.svg';
// styles
import styles from './cart-icon.module.scss';

type CartIconType = {
  onCartIconClick: MouseEventHandler<HTMLDivElement>;
};
const CartIcon = ({ onCartIconClick }: CartIconType) => {
  const cartCount = useSelector(selectCarCount);
  return (
    <div className={styles.cart_icon_container} onClick={onCartIconClick}>
      <CartIconSvg className={styles.cart_icon_svg} />
      {cartCount > 0 ?? <span className={styles.cart_icon_count}>{cartCount}</span>}
    </div>
  );
};

export default CartIcon;
