// plugins
import { NavLink } from 'react-router-dom';
// redux
// components
// imports
// images
// styles
import styles from './navbar-item.module.scss';

interface NavigationItemProps {
  dataName: string;
  activeClassName: string;
  [x: string]: any; //temporary variable
}

const NavbarItem = ({ dataName, activeClassName, ...props }: NavigationItemProps) => {
  const activeClass = 'active';
  return (
    <NavLink
      to={`/${dataName.toLowerCase() !== 'home' ? dataName.toLowerCase() : ''}`}
      className={styles.header_menu__item}
      {...props}>
      {dataName}
    </NavLink>
  );
};

export default NavbarItem;
