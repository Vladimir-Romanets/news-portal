import React, { type InputHTMLAttributes } from "react"
import cn from "classnames"
import styles from "./Input.module.css"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
}

export const Input = ({
  label,
  name,
  className = "",
  ref,
  ...props
}: InputProps & {
  ref?:
    | React.RefObject<HTMLInputElement | null>
    | React.RefCallback<HTMLInputElement | null>
}) => {
  const inputId = props.id || name

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
      <input id={inputId} name={name} className={cn("form-control", styles.input)} ref={ref} {...props} />
    </div>
  )
}
