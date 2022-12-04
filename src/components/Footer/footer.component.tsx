import { useNavigate } from 'react-router-dom';
import { version } from '../../../package.json';
// context
// components
import Icon from '../Icon/icon.component';
// imports
import CategoriesApi from '../../services/categories.services';
// styles and images
import styles from './footer.module.scss';
import Logo from '../Logo/logo.component';

const Footer = () => {
  const { data: categoryList, isError: errorCategory } = CategoriesApi.getCategoriesPaginated(
    'displayCategories',
    0,
    8,
  );

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_wrapper} ${styles.footer_grid}`}>
        <section className={styles.footer_section}>
          <Logo logoId='footer_logo' type='dark' linkTo='/' />
          <p className={styles.footer_section}>
            This project is a perfect version of a &quot;useless&quot; store that makes no sense and
            shows products that you definitely don&apos;t want and I bet your clicked anyway because
            you saw the photo and not the title.
          </p>
          <p>
            Version: <strong>{version}</strong>
          </p>
        </section>

        {/* Category list */}
        <section className={styles.footer_section}>
          <h4>Categories</h4>
          <nav className={styles.footer_list} aria-label='Category list'>
            {errorCategory
              ? 'No category to display'
              : categoryList?.data.map((category) => (
                  <a key={category.id} aria-label='Category item'>
                    - {category.name}
                  </a>
                ))}
          </nav>
        </section>

        {/* Career list */}
        <section className={styles.footer_section}>
          <h4>Careers</h4>
          <nav className={styles.footer_list} aria-label='Career list'>
            {/* Career title and link */}
            <a href='' aria-label='Career item'>
              - UX Designer
            </a>
          </nav>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
