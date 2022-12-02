import { useNavigate } from 'react-router-dom';
// context
// components
// imports
// styles and images
import styles from './logo.module.scss';

type LogoProps = {
  type?: 'light' | 'dark';
  linkTo?: string;
};
export const LOGO_TYPE = {
  light: 'light',
  dark: 'dark',
  inverted: 'inverted',
};
export const getType = (type = LOGO_TYPE.light) =>
  ({
    [LOGO_TYPE.light]: styles.light,
    [LOGO_TYPE.dark]: styles.dark,
    [LOGO_TYPE.inverted]: styles.inverted,
  }[type]);

const Logo = ({ type, linkTo }: LogoProps) => {
  const navigate = useNavigate();
  const logoType = type ? getType(type) : styles.light;

  return (
    <div className={`${styles.logo} ${logoType}`} onClick={() => navigate(linkTo ? linkTo : '/')}>
      <strong data-text='Fake'>Fake</strong>
      <span>Store</span>
    </div>
  );
};

export default Logo;
