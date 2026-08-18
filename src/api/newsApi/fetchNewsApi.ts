import { URL_NEWS_API } from "@/constants/sourceUrl"
import type { ExtendedArticleQueryParams } from "@/types/query.type"
import { buildNewsApiQueryParams } from "./buildNewsApiQueryParams"
import { mapNewsApiArticles } from "./mapNewsApiArticles"
import type { NewsApiResponse } from "./type"

const API_KEY = import.meta.env.VITE_NEWSAPI_API_KEY

export const fetchNewsApi = async ({
  signal,
  ...query
}: ExtendedArticleQueryParams) => {
  if (!API_KEY) throw Error("API_KEY not provided for the NewsAPI")

  const queryParams = buildNewsApiQueryParams(query, API_KEY)
  const searchParams = new URLSearchParams(queryParams)

  const response = await fetch(`${URL_NEWS_API}?${searchParams}`, { signal })

  if (!response.ok)
    throw Error(`Failed to fetch: ${response.status} ${response.statusText}`)

  const rawNews: NewsApiResponse = await response.json()
  return mapNewsApiArticles(rawNews)
}
