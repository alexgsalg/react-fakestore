// redux
// components
import NavbarItem from '../Navbar-item/navbar-item.component';
// imports
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen';
// styles and images
import styles from './navbar.module.scss';
import { Fragment, useCallback, useEffect, useState } from 'react';

type NavbarProps = {
  mobileMenu?: () => void;
  className?: string | CSSModuleClasses;
};

const Navbar = ({ mobileMenu, className }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Accessibiity
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

  const routeToShow = ['Home', 'Products', 'Categories', 'About', 'Career'];
  return (
    <Fragment>
      {/* Desktop Menu */}
      <nav
        className={`${styles.header_navbar} ${menuOpen ? styles.open : ''} ${className}`}
        onClick={toggleMenu}>
        {routeToShow
          ? routeToShow.map((route, idx) => <NavbarItem dataName={route} key={idx} />)
          : null}
      </nav>
      {menuOpen ? <div className={styles.navmask} onClick={toggleMenu}></div> : null}

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
    </Fragment>
  );
};

export default Navbar;
