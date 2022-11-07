import styles from './button.module.css';

type ButtonType = {
  text: string;
  action: () => void;
  buttonType?: 'base' | 'dark' | 'inverted';
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
};

export const BUTTON_TYPE = {
  base: 'base',
  dark: 'dark',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE.base) =>
  ({
    [BUTTON_TYPE.base]: styles.baseButton,
    [BUTTON_TYPE.dark]: styles.darkButton,
    [BUTTON_TYPE.inverted]: styles.invertedButton,
  }[buttonType]);

const Button = ({ text, action, buttonType, iconBefore, iconAfter }: ButtonType) => {
  const CustomButton = getButton(buttonType);
  return (
    <button className={buttonType ? CustomButton : styles.baseButton} onClick={action}>
      {iconBefore ? iconBefore : null}
      {text}
      {iconAfter ? iconAfter : null}
    </button>
  );
};

export default Button;
