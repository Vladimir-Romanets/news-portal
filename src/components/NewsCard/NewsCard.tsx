import classNames from "classnames"
import type { Article } from "@/types/article.type"
import styles from "./NewsCard.module.css"

interface NewsCardProps {
  article: Article
  className?: string
}

export const NewsCard = ({ article, className }: NewsCardProps) => {
  const {
    title,
    description,
    url,
    imageUrl,
    publishedAt,
    source,
    author,
    category,
  } = article

  return (
    <article className={classNames(styles.card, className)}>
      {imageUrl && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imageLink}
        >
          <img src={imageUrl} alt={title} className={styles.image} />
        </a>
      )}
      <div className={styles.content}>
        {category && (
          <span className={styles.category}>{category.toUpperCase()}</span>
        )}

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.titleLink}
        >
          <h3 className={styles.title}>{title}</h3>
        </a>

        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          <div className={styles.sourceInfo}>
            <div className={styles.sourceLogo}>{source.name.charAt(0)}</div>
            <span className={styles.sourceName}>{source.name}</span>
          </div>

          {author && (
            <>
              <span className={styles.separator}>•</span>
              <span className={styles.author}>{author}</span>
            </>
          )}

          <span className={styles.separator}>•</span>
          <span className={styles.date}>{publishedAt}</span>
        </div>
      </div>
    </article>
  )
}
