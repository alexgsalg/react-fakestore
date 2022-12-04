// context
// components
// imports
import { SectionBlockProps } from '../../models/structure-blocks.model';
// styles and images
import styles from './section-block.module.scss';

const SectionBlock = ({ id, className, children }: SectionBlockProps) => {
  return (
    <section id={id} className={`${styles.section_basic} ${className}`}>
      {children}
    </section>
  );
};

export default SectionBlock;
