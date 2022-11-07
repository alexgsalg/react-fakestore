// plugins
import { useState } from 'react';
// context
// components
// imports
// images
// styles
import styles from './cart-dropdown.module.css';

const CartDropdown = () => {
  const [cartItems, setCartItems] = useState<[]>([]);

  return (
    <div className={styles.cart_dropdown}>
      <header className={styles.dropdown_header}>
        <h3 className={styles.dropdown__title}>Cart</h3>
      </header>
      <div className={styles.dropdown_body}>
        {cartItems.length ? 'items' : <span className={styles.empty_cart}>Your cart is empty</span>}
      </div>
    </div>
  );
};

export default CartDropdown;
