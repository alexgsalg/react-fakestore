// plugins
// components
// imports
import { SectionHeaderProps } from '../../models/structure-blocks.model';
// styles
import styles from './section-header.module.scss';

const SectionHeader = ({ title, subtext, dataText }: SectionHeaderProps) => {
  return (
    <div className={styles.section_header} data-text={dataText}>
      <h2 className={styles.section_header__title}>{title}</h2>
      <p className={styles.section_header__subtext}>{subtext}</p>
    </div>
  );
};

export default SectionHeader;
