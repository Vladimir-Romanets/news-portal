import React, { type InputHTMLAttributes } from "react"
import cn from "classnames"
import { Icon } from "../Icon/Icon"
import styles from "./DatePicker.module.css"

export interface DatePickerProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string
  name: string
}

export const DatePicker = ({
  label,
  name,
  className = "",
  ref,
  ...props
}: DatePickerProps & {
  ref?:
    | React.RefObject<HTMLInputElement | null>
    | React.RefCallback<HTMLInputElement | null>
}) => {
  const inputId = props.id || name

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputContainer}>
        <input
          id={inputId}
          name={name}
          type="date"
          className={cn("form-control", styles.input)}
          ref={ref}
          {...props}
        />
        <span className={styles.icon}>
          <Icon size={16} name="date" />
        </span>
      </div>
    </div>
  )
}
