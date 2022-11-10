// plugins
import { MouseEventHandler, useState } from 'react';
// context
// components
// imports
// images
import { ReactComponent as CartIconSvg } from '../../assets/images/icon-cart.svg';
import Icon from '../Icon/icon.component';
// styles
import styles from './cart-icon.module.css';

type CartIconType = {
  onCartIconClick: MouseEventHandler<HTMLDivElement>;
};
const CartIcon = ({ onCartIconClick }: CartIconType) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className={styles.cart_icon_container} onClick={onCartIconClick}>
      <CartIconSvg className={styles.cart_icon_svg} />
      {counter ? <span className={styles.cart_icon_count}>{counter}</span> : null}
    </div>
  );
};

export default CartIcon;
