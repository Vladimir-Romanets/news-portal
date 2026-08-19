import type { NewsCategory, NewsSourceId, SortOrder } from "@/types/query.type"

export const CATEGORY_OPTIONS: { value: NewsCategory; label: string }[] = [
  { value: "technology", label: "Technology" },
  { value: "general", label: "General" },
  { value: "business", label: "Business" },
  { value: "science", label: "Science" },
  { value: "entertainment", label: "Entertainment" },
  { value: "health", label: "Health" },
  { value: "sports", label: "Sports" },
]

export const SOURCE_OPTIONS: { id: NewsSourceId; label: string }[] = [
  { id: "newsapi", label: "NewsAPI" },
  { id: "guardian", label: "The Guardian" },
  { id: "nyt", label: "NYTimes" },
]

export const SORT_OPTIONS: { value: SortOrder; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "relevance", label: "Relevance" },
]
