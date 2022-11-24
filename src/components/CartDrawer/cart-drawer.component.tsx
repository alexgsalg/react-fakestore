import {
  Fragment,
  useCallback,
  useEffect,
  // useState
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// redux
import { setCartOpenStatus } from '../../store/cart/cart.actions';
import { selectCartStatus } from '../../store/cart/cart.selector';
// components
// imports
// styles and images
import styles from './cart-drawer.module.scss';

const CartDrawer = () => {
  const dispatch = useDispatch();

  const cartStatus: boolean = useSelector(selectCartStatus);
  // const [cartItems, setCartItems] = useState<[]>([]);

  const delayCloseDrawer = () => {
    dispatch(setCartOpenStatus(!cartStatus));
  };

  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      dispatch(setCartOpenStatus(!cartStatus));
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey, false);
    return () => {
      document.removeEventListener('keydown', handleEscKey, false);
    };
  }, []);

  return (
    <Fragment>
      <aside className={`${styles.cart_drawer} ${cartStatus ? styles.cart_drawer_open : ''}`}>
        <header className={styles.drawer_header}>
          <h3 className={styles.drawer__title}>Cart</h3>
        </header>
        <div className={styles.drawer_body}>
          {/* {cartItems.length ? (
            'items'
          ) : ( */}
          <span className={styles.empty_cart}>Your cart is empty</span>
          {/* )} */}
        </div>
      </aside>
      <span
        className={`${styles.drawer_backlayer} ${cartStatus ? styles.drawer_backlayer_open : ''}`}
        onClick={delayCloseDrawer}></span>
    </Fragment>
  );
};

export default CartDrawer;
