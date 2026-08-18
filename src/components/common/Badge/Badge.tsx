import cn from "classnames"
import styles from "./Badge.module.css"

interface Props {
  text: string
  className?: string
}
export const Badge = ({ text, className }: Props) => {
  return <span className={cn(styles.badge, className)}>{text}</span>
}
