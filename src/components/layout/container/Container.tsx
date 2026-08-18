import type { ReactNode } from "react"
import cn from "classnames"
import styles from "./Container.module.css"

interface ContainerProps {
  children?: ReactNode
  className?: string
  as?: "main" | "section" | "div"
}

export const Container = ({
  children,
  className,
  as = "div",
}: ContainerProps) => {
  const Component = as

  return (
    <Component className={cn(styles.container, className)}>
      {children}
    </Component>
  )
}
