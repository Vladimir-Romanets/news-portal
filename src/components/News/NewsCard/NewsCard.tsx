import cn from "classnames"
import type { Article } from "@/types/article.type"
import { Badge } from "@/components/common"
import styles from "./NewsCard.module.css"
import { dateFormatter } from "@/utils/dateFormatter"

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
    <article className={cn(styles.card, className)}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imageLink}
        aria-label={title}
      >
        <img
          src={imageUrl || "/placeholder.webp"}
          alt={title}
          className={styles.image}
          loading="lazy"
        />
      </a>
      <div className={styles.content}>
        {category && <Badge className={styles.category} text={category} />}

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.titleLink}
          aria-label={title}
        >
          <h2 className={styles.title}>{title}</h2>
        </a>

        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          <div className={styles.sourceInfo}>
            <div className={styles.sourceLogo}>{source.name.charAt(0)}</div>
            <span className={styles.sourceName}>{source.name}</span>
          </div>

          <div className={styles.meta}>
            {author && (
              <>
                <span className={styles.author}>{author}</span>
                <span className={styles.separator}>•</span>
              </>
            )}
            <time
              dateTime={publishedAt}
              className={cn(styles.date, !author && styles.dateRight)}
            >
              {dateFormatter(publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </article>
  )
}
