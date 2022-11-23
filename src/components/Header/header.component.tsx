// plugins
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// redux
import { setCartOpenStatus } from '../../store/cart/cart.actions';
import { selectCartStatus } from '../../store/cart/cart.selector';
// components
import CartIcon from '../../components/Cart-icon/cart-icon.component';
import Navbar from '../Navbar/Navbar/navbar.component';
import CartDrawer from '../CartDrawer/cart-drawer.component';
import Icon from '../Icon/icon.component';
// imports
// images
// styles
import styles from './header.module.scss';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartStatus: boolean = useSelector(selectCartStatus);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCart = () => dispatch(setCartOpenStatus(!cartStatus));
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
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
          <div className={styles.header_actions__search}>
            <Icon iconName='search' size={26} />
          </div>
          <div className={styles.header_actions__cart}>
            <CartIcon onCartIconClick={toggleCart} />
          </div>
        </div>
      </div>
      {/* Cart Drawer */}
      <CartDrawer />
      {/* Search bar */}
    </header>
  );
};

export default Header;
