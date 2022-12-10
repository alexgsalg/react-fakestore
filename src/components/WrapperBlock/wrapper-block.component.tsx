// context
// components
// imports
import { StructureBlockProps } from '../../models/generics.model';
// styles and images
import styles from './wrapper-block.module.scss';

// type wrapperStyle = 'default' | 'short' | string;
// export const STYLE = { default: 'default', short: 'short' };
// const getStyle = (style = STYLE.default) =>
//   ({
//     [STYLE.default]: styles.default,
//     [STYLE.short]: styles.short,
//   }[style]);

const WrapperBlock = ({ id, style, children }: StructureBlockProps<string>) => {
  // const customStyle = style ? getStyle(style) : styles.default;
  return (
    <div id={id} className={`${styles.wrapper} ${style}`}>
      {children}
    </div>
  );
};

export default WrapperBlock;
