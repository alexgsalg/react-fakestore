import { MouseEventHandler } from 'react';

type IconTypes = {
  iconName: string;
  className?: string;
  size?: number;
  actionOnClick?: MouseEventHandler<SVGSVGElement | HTMLSpanElement>;
};

const Icon = ({ iconName, className, size, actionOnClick }: IconTypes) => {
  return (
    <span
      className={`material-icons ${className ? className : ''}`}
      style={{ fontSize: size ? size : `${size}px` }}
      onClick={actionOnClick}>
      {iconName}
    </span>
  );
};
export default Icon;
