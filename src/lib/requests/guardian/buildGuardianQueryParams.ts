import { combineQueryWithAuthor } from "@/helper/combineQueryWithAuthor"
import type {
  ArticleQueryParams,
  NewsCategory,
  SortOrder,
} from "@/types/query.type"

const GUARDIAN_CATEGORY_MAP: Record<NewsCategory, string> = {
  business: "business",
  entertainment: "culture",
  general: "news",
  health: "society",
  science: "science",
  sports: "sport",
  technology: "technology",
}

const GUARDIAN_SORT_MAP: Record<SortOrder, string> = {
  newest: "newest",
  oldest: "oldest",
  relevance: "relevance",
}

export const buildGuardianQueryParams = (
  params: ArticleQueryParams,
  apiKey: string,
): Record<string, string> => {
  const query: Record<string, string> = {
    "api-key": apiKey,
    "show-fields": "thumbnail,byline,trailText,headline",
    "page-size": String(params.pageSize ?? 10),
    page: String(params.page ?? 1),
    "order-by": params.sortBy ? GUARDIAN_SORT_MAP[params.sortBy] : "newest",
  }

  const searchQuery = combineQueryWithAuthor(params.query, params.author)
  if (searchQuery) {
    query["q"] = searchQuery
  }

  if (params.category) {
    query["section"] = GUARDIAN_CATEGORY_MAP[params.category]
  }

  if (params.fromDate) {
    query["from-date"] = params.fromDate
  }

  if (params.toDate) {
    query["to-date"] = params.toDate
  }

  return query
}
