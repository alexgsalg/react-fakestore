// plugins
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// context
// components
import CartIcon from '../../components/Cart-icon/cart-icon.component';
import Navbar from '../Navbar/navbar.component';
// imports
// images
// import { ReactComponent as Logo } from '../../assets/images/logo.svg';
// import Avatar from '../../assets/images/image-avatar.png';
// styles
import styles from './header.module.css';
import CartDrawer from '../CartDrawer/cart-drawer.component';
import Icon from "../Icon/icon.component";

const Header = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_logo_container} onClick={() => navigate('/')}>
          <span className={styles.header_logo} aria-hidden='true'>
            <strong data-text='Fake'>Fake</strong>Store
          </span>
        </div>
        <div className={styles.header_menu}>
          <Navbar />
          {/* Mobile TODO:*/}
        </div>
        <div className={styles.header_menu_icon}>
          <span></span>
          <div className={styles.menu_icon}>
            <input className={styles.menu_icon__cheeckbox} type='checkbox' />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.header_actions}>
          <div className={styles.header_actions__cart}>
            <CartIcon onCartIconClick={toggleCart} />
          </div>
          <div className={styles.header_actions__search}>
            <Icon iconName='search' />
          </div>
        </div>
      </div>
      {/* TODO: cart Toggle */}
      {isCartOpen ? <CartDrawer open={isCartOpen} closeDrawer={toggleCart} /> : null}
      {/* Search bar */}
    </header>
  );
};

export default Header;
