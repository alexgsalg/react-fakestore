// plugins
import { Dispatch, Fragment, MouseEventHandler, SetStateAction, useState } from 'react';
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

const CartDrawer = ({ open = false, closeDrawer }: CartDrawerProps) => {
  const [cartItems, setCartItems] = useState<[]>([]);

  return (
    <Fragment>
      <div className={`${styles.cart_drawer} ${open ? styles.cart_drawer_open : ''}`}>
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
      </div>
      <span
        className={`${styles.drawer_backlayer} ${open ? styles.drawer_backlayer_open : ''}`}
        onClick={closeDrawer}></span>
    </Fragment>
  );
};

export default CartDrawer;
