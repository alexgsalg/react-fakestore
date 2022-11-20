// plugins
// redux
// components
import NavbarItem from '../Navbar-item/navbar-item.component';
// imports
// images
// styles
import styles from './navbar.module.scss';

type NavbarProps = {
  mobileMenu: () => void;
};

const Navbar = ({ mobileMenu }: NavbarProps) => {
  const routeToShow = ['Home', 'Products', 'Categories', 'About', 'Career'];

  return (
    <nav className={styles.header_navbar} onClick={mobileMenu}>
      {routeToShow
        ? routeToShow.map((route, idx) => <NavbarItem dataName={route} key={idx} />)
        : null}
    </nav>
  );
};

export default Navbar;