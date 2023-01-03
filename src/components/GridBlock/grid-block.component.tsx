// context
// components
// imports
import { StructureBlockProps } from '../../models/generics.model';
// styles and images
import './grid-block.scss';

interface GridBlockProps extends StructureBlockProps<string> {
  /**XS is mandatory because is a mobile-first structure*/
  xs: number | 'fit';
  sm?: number | 'fit';
  md?: number | 'fit';
  lg?: number | 'fit';
  xl?: number | 'fit';
}

const GridBlock = ({ id, customClass, children, xs, sm, md, lg, xl }: GridBlockProps) => {
  const customStyle = customClass ? customClass : '';
  const xsGrid = xs ? `xs-${xs}` : '';
  const smGrid = sm ? `sm-${sm}` : '';
  const mdGrid = md ? `md-${md}` : '';
  const lgGrid = lg ? `lg-${lg}` : '';
  const xlGrid = xl ? `xl-${xl}` : '';
  return (
    <div
      id={id}
      className={`gridblock ${customStyle} ${xsGrid} ${smGrid} ${mdGrid} ${lgGrid} ${xlGrid}`}>
      {children}
    </div>
  );
};

export default GridBlock;
