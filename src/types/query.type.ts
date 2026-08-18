export type NewsSourceId = "newsapi" | "guardian" | "nyt"

export type NewsCategory =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology"

export type SortOrder = "newest" | "oldest" | "relevance"

export interface ArticleQueryParams {
  query?: string
  category?: NewsCategory | NewsCategory[]
  source?: NewsSourceId | NewsSourceId[]
  author?: string
  fromDate?: string
  toDate?: string
  sortBy?: SortOrder
  page?: number
  pageSize?: number
}

export interface ExtendedArticleQueryParams extends ArticleQueryParams {
  signal?: AbortSignal
}
