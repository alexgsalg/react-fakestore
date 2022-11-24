export type CategoryType = {
  id: string;
  name: string;
  image: string;
};

export type CategoryCardProps = {
  data: CategoryType;
  clickAction?: () => void;
  className?: CSSModuleClasses | string;
};
