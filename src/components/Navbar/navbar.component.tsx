// plugins
// context
// components
import NavbarItem from '../Navbar-item/navbar-item.component';
// imports
// images
// styles
import styles from './navbar.module.css';

const Navbar = () => {
  const routeToShow = ['Home', 'Products', 'Categories', 'About', 'Career'];

  return (
    <nav className={styles.header_menu_container}>
      {routeToShow
        ? routeToShow.map((route, idx) => (
            <NavbarItem dataName={route} key={idx} activeClassName='active' />
          ))
        : null}
    </nav>
  );
};

export default Navbar;
