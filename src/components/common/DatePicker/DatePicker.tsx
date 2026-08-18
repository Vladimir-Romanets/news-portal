import React, { type InputHTMLAttributes } from "react"
import cn from "classnames"
import styles from "./DatePicker.module.css"

export interface DatePickerProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string
}

export const DatePicker = ({
  label,
  className = "",
  ref,
  ...props
}: DatePickerProps & {
  ref?:
    | React.RefObject<HTMLInputElement | null>
    | React.RefCallback<HTMLInputElement | null>
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputContainer}>
        <input type="date" className={styles.input} ref={ref} {...props} />
        <span className={styles.icon}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </span>
      </div>
    </div>
  )
}
