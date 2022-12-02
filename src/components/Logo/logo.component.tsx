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

const getType = (type = 'light') => {
  ({
    ['light']: styles.light,
    ['dark']: styles.dark,
  }[type]);
};

const Logo = ({ type, linkTo }: LogoProps) => {
  const navigate = useNavigate();
  console.log('type', type);
  const logoType = type ? getType(type) : styles.light;
  console.log('logoType', logoType);

  return (
    <div className={`${styles.logo} ${logoType}`} onClick={() => navigate(linkTo ? linkTo : '/')}>
      <strong data-text='Fake'>Fake</strong>
      <span>Store</span>
    </div>
  );
};

export default Logo;
