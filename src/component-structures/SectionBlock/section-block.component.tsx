// context
// components
// imports
import { SectionBlockProps } from '../../models/structure-blocks.model';
// styles and images
import styles from './section-block.module.scss';

export const TYPE = {
  basic: 'basic',
  odd: 'odd',
  no_margin: 'no_margin',
};
export const getStyle = (style = TYPE.basic) =>
  ({
    [TYPE.basic]: styles.section_basic,
    [TYPE.odd]: styles.section_odd,
    [TYPE.no_margin]: styles.section_no_margin,
  }[style]);
const SectionBlock = ({ id, customClass, children, type }: SectionBlockProps) => {
  const customStyle = type ? getStyle(type) : styles.section_basic;
  const customClassName = customClass ? customClass : '';

  return (
    <section id={id} className={`${customStyle} ${customClassName}`}>
      {children}
    </section>
  );
};

export default SectionBlock;
