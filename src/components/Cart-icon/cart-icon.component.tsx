// plugins
import {
  MouseEventHandler,
  // useState
} from 'react';
// redux
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
  // const [counter, setCounter] = useState<number>(0);
  return (
    <div className={styles.cart_icon_container} onClick={onCartIconClick}>
      <CartIconSvg className={styles.cart_icon_svg} />
      <span className={styles.cart_icon_count}>1</span>
    </div>
  );
};

export default CartIcon;
