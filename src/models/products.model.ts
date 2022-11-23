import { CategoryType } from './categories.model';

export type ProductCardProps = {
  data: ProductType;
  clickAction?: () => void;
  isHorizontal?: boolean;
  className?: CSSModuleClasses | string;
};

export type ProductType = {
  id: number;
  title: string;
  store?: string;
  description: string;
  price: number;
  category: CategoryType;
  images: string[];
};
