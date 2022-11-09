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
          <span className={styles.header_logo} aria-hidden="true"><strong data-text="Store">Store</strong>Faker</span>
        </div>
        <div className={styles.header_menu}>
          <Navbar />
          {/* Mobile TODO:*/}
          {/* <div className={styles.header_menu_icon}>
            <span></span>
          </div> */}
        </div>
        <div className={styles.header_actions}>
          <div className={styles.header_actions__cart}>
            <CartIcon onCartIconClick={toggleCart} />
          </div>
          <picture className={styles.header_actions__profile}>
            <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt='Avatar profile' />
          </picture>
        </div>
      </div>
      {/* TODO: cart Toggle */}
      <CartDrawer open={isCartOpen} closeDrawer={toggleCart} />
    </header>
  );
};

export default Header;
