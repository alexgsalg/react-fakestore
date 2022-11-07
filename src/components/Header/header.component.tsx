// plugins
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// context
// components
import CartIcon from '../../components/Cart-icon/cart-icon.component';
import Navbar from '../Navbar/navbar.component';
// imports
// images
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import Avatar from '../../assets/images/image-avatar.png';
// styles
import styles from './header.module.css';
import CartDropdown from '../CartDropdown/cart-dropdown.component';

const Header = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <Logo onClick={() => navigate('/')} />
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
            {/* TODO: cart Toggle */}
            {isCartOpen && <CartDropdown />}
          </div>
          <picture className={styles.header_actions__profile}>
            <img src={Avatar} alt='Avatar profile' />
          </picture>
        </div>
      </div>
    </header>
  );
};

export default Header;
