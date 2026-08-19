import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.css"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  fullWidth?: boolean
}

export const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const btnClass = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  )
}
