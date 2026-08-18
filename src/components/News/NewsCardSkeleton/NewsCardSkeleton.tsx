import classNames from "classnames"
import styles from "./NewsCardSkeleton.module.css"

interface NewsCardSkeletonProps {
  className?: string
}

export const NewsCardSkeleton = ({ className }: NewsCardSkeletonProps) => {
  return (
    <article className={classNames(styles.card, className)}>
      <div className={classNames(styles.skeleton, styles.image)} />
      <div className={styles.content}>
        <div className={classNames(styles.skeleton, styles.category)} />

        <div className={styles.titleWrapper}>
          <div className={classNames(styles.skeleton, styles.title)} />
          <div className={classNames(styles.skeleton, styles.titleShort)} />
        </div>

        <div className={styles.descriptionWrapper}>
          <div className={classNames(styles.skeleton, styles.description)} />
          <div className={classNames(styles.skeleton, styles.description)} />
          <div
            className={classNames(styles.skeleton, styles.descriptionShort)}
          />
        </div>

        <div className={styles.footer}>
          <div className={classNames(styles.skeleton, styles.sourceLogo)} />
          <div className={classNames(styles.skeleton, styles.sourceName)} />

          <div className={classNames(styles.skeleton, styles.author)} />
          <span className={styles.separator}>•</span>
          <div className={classNames(styles.skeleton, styles.date)} />
        </div>
      </div>
    </article>
  )
}
