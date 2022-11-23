export type ProductCardProps = {
  data: ProductType;
  clickAction?: () => void;
  isHorizontal?: boolean;
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

export type CategoryType = {
  id: string;
  name: string;
  image: string;
};
