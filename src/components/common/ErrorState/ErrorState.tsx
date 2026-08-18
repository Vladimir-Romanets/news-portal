import cn from "classnames"
import styles from "./ErrorState.module.css"

interface ErrorItem {
  source?: string
  error: string
}

interface Props {
  errors: ErrorItem[]
  className?: string
}

export const ErrorState = ({ errors, className }: Props) => {
  return (
    <div className={cn(styles.errorState, className)}>
      <h3 className={styles.title}>Something went wrong</h3>
      <ul className={styles.list}>
        {errors.map((err, index) => (
          <li key={index} className={styles.item}>
            {err.source && (
              <span className={styles.source}>{err.source}: </span>
            )}
            {err.error}
          </li>
        ))}
      </ul>
    </div>
  )
}
