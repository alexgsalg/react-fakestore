import { GenericCardProps } from './generics.model';

export type CategoryType = {
  id: string;
  name: string;
  image: string;
};

export interface CategoryCardProps extends GenericCardProps<CategoryType> {
  /** Sets the card's image as a background filling the card behind the card's content */
  imgAsBackground?: boolean;
}
