import type { Article } from "@/types/article.type"
import type { ArticleQueryParams, NewsSourceId } from "@/types/query.type"
import { fetchGuardianApi } from "./guardian"
import { fetchNewsApi } from "./newsApi"
import { fetchNYTApi } from "./nyt"

type Errors = { source: NewsSourceId; error: string }

const sourceFetchers: Record<
  NewsSourceId,
  (params: ArticleQueryParams) => Promise<Article[]>
> = {
  guardian: fetchGuardianApi,
  newsapi: fetchNewsApi,
  nyt: fetchNYTApi,
}

export const apiClient = async (params: ArticleQueryParams) => {
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
      // TODO: for production better to adjust logger
      console.error(`Failed to fetch from ${sourceId}:`, result.reason)
      errors.push({
        source: sourceId,
        error:
          result.reason instanceof Error
            ? result.reason.message
            : "Unknown error",
      })
    }
  })

  return { articles, errors }
}
