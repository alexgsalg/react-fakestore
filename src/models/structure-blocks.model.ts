import { StructureBlockProps } from './generics.model';

/**
 * @title section title
 * @subtext Text below title, preference for short sentences, max of 20 characters
 * @dataText Text that shows behind the header on a large scale, max of 10 characters
 */
export type SectionHeaderProps = {
  title: string;
  subtext: string;
  dataText?: string;
};

export type SectionBlockProps = {
  id?: string;
  className?: string | CSSModuleClasses;
  style?: string;
  children?: React.ReactNode;
};
