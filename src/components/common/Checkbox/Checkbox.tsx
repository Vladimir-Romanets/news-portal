import React, { type InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from "./Checkbox.module.css";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  name: string;
}

export const Checkbox = ({ label, name, className = '', ref, ...props }: CheckboxProps & { ref?: React.RefObject<HTMLInputElement | null> | React.RefCallback<HTMLInputElement | null> }) => {
  const checkboxId = props.id || name;

  return (
    <label htmlFor={checkboxId} className={cn(styles.checkboxWrapper, className)}>
      <input
        id={checkboxId}
        name={name}
        type="checkbox"
        className={styles.checkbox}
        ref={ref}
        {...props}
      />
      <span className={styles.customCheckbox}>
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  );
};
