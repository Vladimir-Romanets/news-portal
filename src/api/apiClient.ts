import type { Article } from "@/types/article.type"
import type {
  ExtendedArticleQueryParams,
  NewsSourceId,
} from "@/types/query.type"
import { fetchGuardianApi } from "./guardian"
import { fetchNewsApi } from "./newsApi"
import { fetchNYTApi } from "./nyt"

type Errors = { source: NewsSourceId; error: string }

export type NewsReturning = {
  articles: Article[]
  errors: Errors[]
}

const sourceFetchers: Record<
  NewsSourceId,
  (params: ExtendedArticleQueryParams) => Promise<Article[]>
> = {
  guardian: fetchGuardianApi,
  newsapi: fetchNewsApi,
  nyt: fetchNYTApi,
}

export const apiClient = async (
  params: ExtendedArticleQueryParams,
): Promise<NewsReturning> => {
  const selectedSources: NewsSourceId[] = params.source
    ? Array.isArray(params.source)
      ? params.source
      : [params.source]
    : ["guardian", "newsapi", "nyt"]

  const requests = selectedSources.map(async (sourceId) => {
    const fetcher = sourceFetchers[sourceId]
    const data = await fetcher(params)
    return { sourceId, data }
  })

  const results = await Promise.allSettled(requests)

  const articles: Article[] = []

  const errors: Errors[] = []

  results.forEach((result, index) => {
    const sourceId = selectedSources[index]

    if (result.status === "fulfilled") {
      articles.push(...result.value.data)
    } else {
      const error = result.reason
      const isAbortError = error instanceof Error && error.name === "AbortError"

      if (!isAbortError) {
        // TODO: for production better to adjust logger
        console.error(`Failed to fetch from ${sourceId}:`, error)
        errors.push({
          source: sourceId,
          error: error instanceof Error ? error.message : "Unknown error",
        })
      }
    }
  })

  return { articles, errors }
}
