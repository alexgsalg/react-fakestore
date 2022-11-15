// plugins
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// context
// components
import CartIcon from '../../components/Cart-icon/cart-icon.component';
import Navbar from '../Navbar/navbar.component';
import CartDrawer from '../CartDrawer/cart-drawer.component';
import Icon from '../Icon/icon.component';
// imports
// images
// styles
import styles from './header.module.scss';

const Header = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsCartOpen(false);
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey, false);
    return () => {
      document.removeEventListener('keydown', handleEscKey, false);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_logo_container} onClick={() => navigate('/')}>
          <span className={styles.header_logo} aria-hidden='true'>
            <strong data-text='Fake'>Fake</strong>Store
          </span>
        </div>
        {/* Desktop Menu */}
        <div className={`${styles.header_menu} ${menuOpen ? styles.open : ''}`}>
          <Navbar mobileMenu={toggleMenu} />
        </div>
        {/* Mobile Menu */}
        <div className={styles.header_menu_icon} onClick={toggleMenu}>
          <div className={styles.menu_icon}>
            <input
              className={styles.menu_icon__cheeckbox}
              type='checkbox'
              checked={menuOpen}
              onChange={toggleMenu}
            />
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
