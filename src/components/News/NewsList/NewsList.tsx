import { useNews } from "@/hooks/useNews"
import { NewsGrid } from "../NewsGrid/NewsGrid"
import { NewsCard } from "../NewsCard/NewsCard"
import { NewsCardSkeleton } from "../NewsCardSkeleton/NewsCardSkeleton"
import { ErrorState } from "@/components/common"

export const NewsList = () => {
  const { isLoading, articles, errors } = useNews()
  const isFirstLoad = isLoading && !articles.length

  return (
    <>
      <NewsGrid>
        {isFirstLoad
          ? Array.from({ length: 6 }).map((_, index) => (
              <NewsCardSkeleton key={index} />
            ))
          : articles.map((article) => (
              <NewsCard article={article} key={article.id} />
            ))}
      </NewsGrid>
      {errors.length ? <ErrorState errors={errors} /> : null}
    </>
  )
}
