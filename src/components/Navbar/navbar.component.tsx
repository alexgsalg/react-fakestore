// plugins
import { NavLink } from 'react-router-dom';
// context
// components
import NavbarItem from '../Navbar-item/navbar-item.component';
// imports
// images
// styles
// import './navbar.styles.css';
import styles from './navbar.module.css';

const Navbar = () => {
  const routeToShow = ['Collections', 'Men', 'Women', 'About', 'Contact'];

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
