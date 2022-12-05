import { Fragment } from 'react';
// components
import Button from '../Button/button.component';
import Icon from '../Icon/icon.component';
// imports
import { StructureBlockProps } from '../../models/generics.model';
import CategoriesApi from '../../services/categories.services';
// styles
import styles from './list-filter.module.scss';

const ListFilter = ({ id, style, children }: StructureBlockProps<string>) => {
  const { data: categoryList, isLoading: catLoading } = CategoriesApi.getAllCategories();
  return (
    <Fragment>
      <Button
        text='Filter'
        buttonType='base'
        size='sm'
        action={() => alert('HAHA you fool')}
        iconBefore={<Icon iconName='filter_list' size={16} />}
      />
      <aside className={styles.product_filter}>
        <h3>Product categories</h3>
        <nav className={styles.filter_list} aria-label='Category list'>
          {catLoading
            ? 'No category to display'
            : categoryList?.data.map((category) => (
                <a key={category.id} aria-label='Category item'>
                  {category.name}
                </a>
              ))}
        </nav>
      </aside>
    </Fragment>
  );
};

export default ListFilter;
