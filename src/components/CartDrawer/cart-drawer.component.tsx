import {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  // useState
} from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
// context
import { setCartOpenStatus } from '../../store/cart/cart.actions';
import { selectCartStatus } from '../../store/cart/cart.selector';
// components
// imports
import useMountTransition from '../../hooks/useMountTransition';
// styles and images
import styles from './cart-drawer.module.scss';

function createPortalRoot() {
  const drawerRoot = document.createElement('div');
  drawerRoot.setAttribute('id', 'cart_drawer');

  return drawerRoot;
}

const CartDrawer = () => {
  const portalRootRef = useRef(document.getElementById('cart_drawer') || createPortalRoot());
  const bodyRef = useRef(document.querySelector('body'));
  const dispatch = useDispatch();
  const cartStatus: boolean = useSelector(selectCartStatus);
  // const [cartItems, setCartItems] = useState<[]>([]);
  const transition = useMountTransition(cartStatus, 300);

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

  // Append portal root on mount
  useEffect(() => {
    if (!bodyRef.current) return;
    bodyRef.current.appendChild(portalRootRef.current);
    const portal = portalRootRef.current;
    const bodyEl = bodyRef.current;

    return () => {
      // Clean up the portal when drawer component unmounts
      portal.remove();
      // Ensure scroll overflow is removed
      bodyEl.style.overflow = '';
    };
  }, []);

  if (!transition && !cartStatus) {
    return null;
  }
  return createPortal(
    <Fragment>
      <aside
        aria-hidden={cartStatus}
        className={`${styles.cart_drawer} ${cartStatus ? styles.cart_drawer_open : ''}`}>
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
      <div
        className={`${styles.drawer_backlayer} ${cartStatus ? styles.drawer_backlayer_open : ''}`}
        onClick={delayCloseDrawer}></div>
    </Fragment>,
    portalRootRef.current,
  );
};

export default CartDrawer;
