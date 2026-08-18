import { type ReactNode } from "react"
import classNames from "classnames"
import styles from "./NewsGrid.module.css"

interface NewsGridProps {
  children: ReactNode
  className?: string
}

export const NewsGrid = ({ children, className }: NewsGridProps) => {
  return <div className={classNames(styles.grid, className)}>{children}</div>
}
