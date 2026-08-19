import React, { type InputHTMLAttributes } from "react"
import cn from "classnames"
import { Icon } from "../Icon/Icon"
import styles from "./Checkbox.module.css"

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string
  name: string
}

export const Checkbox = ({
  label,
  name,
  className = "",
  ref,
  ...props
}: CheckboxProps & {
  ref?:
    | React.RefObject<HTMLInputElement | null>
    | React.RefCallback<HTMLInputElement | null>
}) => {
  const checkboxId = props.id || name

  return (
    <label
      htmlFor={checkboxId}
      className={cn(styles.checkboxWrapper, className)}
    >
      <input
        id={checkboxId}
        name={name}
        type="checkbox"
        className={styles.checkbox}
        ref={ref}
        {...props}
      />
      <span className={styles.customCheckbox}>
        <Icon name="check" size={14} />
      </span>
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  )
}
