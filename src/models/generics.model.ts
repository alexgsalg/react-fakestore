export type GenericCardProps<T, A = () => void> = {
  /** The Data property of the GenericCardProps is used to send a object containing al the information that will populate the card. The <T> type is the interface or type of that object sent. */
  data: T;
  /** Action to be executed when the card is clicked, by default the return is of void type. */
  clickAction?: A;
  /** This property is used to pass the className for the card component as a default React class name attribute. */
  className?: CSSModuleClasses | string;
};

export type StructureBlockProps<S> = {
  id?: string;
  /** Action to be executed when the card is clicked, by default the return is of void type. */
  style?: S;
  children?: React.ReactNode;
};
