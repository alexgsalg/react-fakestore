import { useEffect, useState } from 'react';
// components
// imports
import { CategoryCardProps } from '../../models/categories.model';
// styles
import styles from './category-card.module.scss';

const CategoryCard = ({ data, clickAction, className }: CategoryCardProps) => {
  const onClickAction = () => {
    console.log('poduct id: ', id);
    // clickAction
  };

  const { id, name, image } = data;
  return (
    <article
      className={`${styles.category} ${className ? className : null}`}
      onClick={onClickAction}>
      <h3 className={styles.category__title} aria-label={name}>
        <span>{name}</span>
      </h3>
      <figure className={styles.category__image}>
        <img src={image} alt={`category ${name}`} />
      </figure>
    </article>
  );
};

export default CategoryCard;
