import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// context
import { setCartOpenStatus } from '../../store/cart/cart.actions';
import { selectCartStatus } from '../../store/cart/cart.selector';
// components
import CartIcon from '../../components/Cart-icon/cart-icon.component';
import Navbar from '../Navbar/Navbar/navbar.component';
import Icon from '../Icon/icon.component';
// imports
// styles and images
import styles from './header.module.scss';
import Logo from '../Logo/logo.component';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartStatus: boolean = useSelector(selectCartStatus);
  const toggleCart = () => dispatch(setCartOpenStatus(!cartStatus));

  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo_container}>
          <Logo linkTo='/' />
        </div>
        {/* Desktop Menu */}
        <Navbar className={styles.header_menu} />

        <div className={styles.header_actions}>
          <div className={styles.header_actions__search}>
            <Icon iconName='search' size={26} />
          </div>
          <div className={styles.header_actions__cart}>
            <CartIcon onCartIconClick={toggleCart} />
          </div>
        </div>
      </div>
      {/* Search bar */}
    </header>
  );
};

export default Header;
