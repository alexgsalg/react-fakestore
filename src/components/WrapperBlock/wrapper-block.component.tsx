// context
// components
// imports
import { StructureBlockProps } from '../../models/generics.model';
// styles and images
import styles from './wrapper-block.module.scss';

const WrapperBlock = ({ id, style, children }: StructureBlockProps<string>) => {
  return (
    <div id={id} className={`${styles.wrapper} ${style}`}>
      {children}
    </div>
  );
};

export default WrapperBlock;
