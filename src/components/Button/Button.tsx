import clsx from 'clsx';
import css from './Button.module.css';
import React, { FC } from 'react';

interface ButtonTypes {
  selected: boolean;
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const Button: FC<ButtonTypes> = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
