import { NavLink } from 'react-router-dom';
// context
// components
// imports
// styles and images
import styles from './navbar-item.module.scss';

interface NavigationItemProps {
  dataName: string;
  [x: string]: any; //temporary variable
}

const NavbarItem = ({ dataName, ...props }: NavigationItemProps) => {
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
