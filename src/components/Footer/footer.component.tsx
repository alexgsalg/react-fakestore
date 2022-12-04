import { useNavigate } from 'react-router-dom';
// context
// components
import Icon from '../Icon/icon.component';
// imports
import CategoriesApi from '../../services/categories.services';
// styles and images
import styles from './footer.module.scss';
import Logo from '../Logo/logo.component';

const Footer = () => {
  const navigate = useNavigate();
  const {
    data: categoryList,
    isError: errorCategory,
    ...categoryQuery
  } = CategoriesApi.getCategoriesPaginated('displayCategories', 0, 8);

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_wrapper} ${styles.footer_grid}`}>
        <section className={styles.footer_section}>
          <Logo type='dark' linkTo='/' />
          <ul>
            <li>
              This project is a perfect version of a &quot;useless&quot; store that makes no sense
              and shows products that you definitely don&apos;t want and I bet your clicked anyway
              because you saw the photo and not the title.
            </li>
            <li>Version: 0.4.1</li>
          </ul>
        </section>

        {/* Category list */}
        <section className={styles.footer_section}>
          <nav>
            {errorCategory
              ? 'No category to display'
              : categoryList?.data.map((category) => <li key={category.id}>{category.name}</li>)}
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
