// plugins
import { Fragment, MouseEventHandler, useRef, useState } from 'react';
// context
// components
// imports
// images
// styles
import styles from './cart-drawer.module.css';

type CartDrawerProps = {
  open: boolean;
  closeDrawer: MouseEventHandler<HTMLSpanElement>;
};
const duration = 300;

const CartDrawer = ({ open = false, closeDrawer }: CartDrawerProps) => {
  const nodeRef = useRef(null);
  const [showAside, setShowAside] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<[]>([]);

  const delayCloseDrawer = (event: any) => {
    setShowAside(false);
    setTimeout(() => {
      closeDrawer(event);
    }, duration);
  };

  return (
    <Fragment>
      <aside className={`${styles.cart_drawer} ${showAside ? styles.cart_drawer_open : ''}`}>
        <header className={styles.drawer_header}>
          <h3 className={styles.drawer__title}>Cart</h3>
        </header>
        <div className={styles.drawer_body}>
          {cartItems.length ? (
            'items'
          ) : (
            <span className={styles.empty_cart}>Your cart is empty</span>
          )}
        </div>
      </aside>
      <span
        className={`${styles.drawer_backlayer} ${showAside ? styles.drawer_backlayer_open : ''}`}
        onClick={delayCloseDrawer}></span>
    </Fragment>
  );
};

export default CartDrawer;
