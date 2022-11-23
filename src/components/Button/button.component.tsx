import styles from './button.module.scss';

type ButtonType = {
  text: string;
  action: () => void;
  buttonType?: 'base' | 'dark' | 'inverted';
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  size?: 'sm' | 'md' | 'lg';
};

// TYPE SETTING
export const BUTTON_TYPE = {
  base: 'base',
  dark: 'dark',
  inverted: 'inverted',
};
const getButton = (buttonType = BUTTON_TYPE.base) =>
  ({
    [BUTTON_TYPE.base]: styles.type_base,
    [BUTTON_TYPE.dark]: styles.type_dark,
    [BUTTON_TYPE.inverted]: styles.type_inverted,
  }[buttonType]);

// SIZE SETTING
export const BUTTON_SIZE = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};
const getsize = (size = BUTTON_SIZE.sm) =>
  ({
    [BUTTON_SIZE.sm]: styles.size_small,
    [BUTTON_SIZE.md]: styles.size_medium,
    [BUTTON_SIZE.lg]: styles.size_large,
  }[size]);

const Button = ({ text, action, buttonType, iconBefore, iconAfter, size }: ButtonType) => {
  const customButton = buttonType ? getButton(buttonType) : styles.type_base;
  const buttonSize = size ? getsize(size) : styles.size_medium;

  return (
    <button
      className={`
        ${customButton} 
        ${buttonSize}
      `}
      onClick={action}>
      {iconBefore ? iconBefore : null}
      {text}
      {iconAfter ? iconAfter : null}
    </button>
  );
};

export default Button;
