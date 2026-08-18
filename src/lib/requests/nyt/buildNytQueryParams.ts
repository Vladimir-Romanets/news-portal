import { combineQueryWithAuthor } from "@/helper/combineQueryWithAuthor"
import type {
  ArticleQueryParams,
  NewsCategory,
  SortOrder,
} from "@/types/query.type"

const NYT_CATEGORY_MAP: Record<NewsCategory, string> = {
  business: "Business",
  entertainment: "Arts",
  general: "World",
  health: "Health",
  science: "Science",
  sports: "Sports",
  technology: "Technology",
}

const NYT_SORT_MAP: Record<SortOrder, string> = {
  newest: "newest",
  oldest: "oldest",
  relevance: "relevance",
}

export const buildNytQueryParams = (
  params: ArticleQueryParams,
  apiKey: string,
): Record<string, string> => {
  const query: Record<string, string> = {
    "api-key": apiKey,
    page: String(Math.max(0, (params.page ?? 1) - 1)),
    sort: params.sortBy ? NYT_SORT_MAP[params.sortBy] : "newest",
  }

  const searchQuery = combineQueryWithAuthor(params.query, params.author)

  if (searchQuery) {
    query["q"] = searchQuery
  }

  if (params.category) {
    const nytSection = NYT_CATEGORY_MAP[params.category]
    query["fq"] = `section_name:("${nytSection}")`
  }

  if (params.fromDate) {
    query["begin_date"] = params.fromDate.replace(/-/g, "")
  }

  if (params.toDate) {
    query["end_date"] = params.toDate.replace(/-/g, "")
  }

  return query
}
