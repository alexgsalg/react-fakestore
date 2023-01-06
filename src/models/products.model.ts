import { GenericCardProps } from './generics.model';
import { CategoryType } from './categories.model';

export type ProductType = {
  id: number;
  title: string;
  store?: string;
  description: string;
  price: number;
  category: CategoryType;
  images: string[];
  quantity?: number;
};

export interface ProductCardProps extends GenericCardProps<ProductType> {
  isHorizontal?: boolean;
  /** If showRating is set to false the rating element will be hidden, default is true */
  showRating?: boolean;
  /** If isBestSeller is set to true the rating value will be 5 if false will be a random number between 1-5 */
  isBestSeller?: boolean;
}
