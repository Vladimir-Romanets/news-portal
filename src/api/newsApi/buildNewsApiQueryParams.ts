import { combineQueryWithAuthor } from "@/utils/combineQueryWithAuthor"
import type { ArticleQueryParams, SortOrder } from "@/types/query.type"

const NEWSAPI_SORT_MAP: Record<SortOrder, string> = {
  newest: "publishedAt",
  oldest: "publishedAt",
  relevance: "relevancy",
}

export const buildNewsApiQueryParams = (
  params: ArticleQueryParams,
  apiKey: string,
): Record<string, string> => {
  const query: Record<string, string> = {
    apiKey,
    pageSize: String(params.pageSize ?? 20),
    page: String(params.page ?? 1),
    sortBy: params.sortBy ? NEWSAPI_SORT_MAP[params.sortBy] : "publishedAt",
  }

  const searchQuery = combineQueryWithAuthor(params.query, params.author)

  query["q"] = searchQuery || (params.category ? params.category : "news")

  if (params.fromDate) {
    query["from"] = params.fromDate
  }

  if (params.toDate) {
    query["to"] = params.toDate
  }

  return query
}
