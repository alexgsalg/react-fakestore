import { useNavigate } from 'react-router-dom';
// redux
// components
import Icon from '../Icon/icon.component';
// imports
// styles and images
import styles from './footer.module.scss';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_wrapper} ${styles.footer_grid}`}>
        <section className={styles.footer_section}>
          <div className={styles.footer_logo_container} onClick={() => navigate('/')}>
            <span className={styles.footer_logo}>
              <strong data-text='Fake'>Fake</strong>Store
            </span>
          </div>
          <ul>
            <li>Description of project</li>
            <li>Version: 0.4.1</li>
          </ul>
        </section>

        {/* Category list */}
        <section className={styles.footer_section}>
          <nav>
            {/* Category title and link */}
            <a href=''>Clothes</a>
          </nav>
        </section>

        {/* Career list */}
        <section className={styles.footer_section}>
          <nav>
            {/* Career title and link */}
            <a href=''>UX Designer</a>
          </nav>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
