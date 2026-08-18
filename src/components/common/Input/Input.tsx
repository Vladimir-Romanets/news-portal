import React, { type InputHTMLAttributes } from "react"
import cn from "classnames"
import styles from "./Input.module.css"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = ({
  label,
  className = "",
  ref,
  ...props
}: InputProps & {
  ref?:
    | React.RefObject<HTMLInputElement | null>
    | React.RefCallback<HTMLInputElement | null>
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} ref={ref} {...props} />
    </div>
  )
}
