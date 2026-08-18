import { URL_NYT_API } from "@/constants/sourceUrl"
import type { ExtendedArticleQueryParams } from "@/types/query.type"
import { buildNytQueryParams } from "./buildNytQueryParams"
import { mapNytArticles } from "./mapNytArticles"
import type { NytResponse } from "./type"

const API_KEY = import.meta.env.VITE_NYT_API_KEY

export const fetchNYTApi = async ({
  signal,
  ...query
}: ExtendedArticleQueryParams) => {
  if (!API_KEY) throw Error("API_KEY not provided for the NYT")

  const queryParams = buildNytQueryParams(query, API_KEY)
  const searchParams = new URLSearchParams(queryParams)

  const response = await fetch(`${URL_NYT_API}?${searchParams}`, { signal })

  if (!response.ok)
    throw Error(`Failed to fetch: ${response.status} ${response.statusText}`)

  const rawNews: NytResponse = await response.json()
  return mapNytArticles(rawNews)
}
