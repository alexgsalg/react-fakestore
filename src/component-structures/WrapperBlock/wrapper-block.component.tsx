// context
// components
// imports
import { StructureBlockProps } from '../../models/generics.model';
// styles and images
import styles from './wrapper-block.module.scss';

const WrapperBlock = ({ id, customClass, children }: StructureBlockProps<string>) => {
  const applyCustomClass = customClass ? customClass : '';
  return (
    <div id={id} className={`${styles.wrapper} ${applyCustomClass}`}>
      {children}
    </div>
  );
};

export default WrapperBlock;
