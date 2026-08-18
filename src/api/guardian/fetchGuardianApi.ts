import { URL_GUARDIAN_API } from "@/constants/sourceUrl"
import type { ExtendedArticleQueryParams } from "@/types/query.type"
import { buildGuardianQueryParams } from "./buildGuardianQueryParams"
import { mapGuardianArticles } from "./mapGuardianArticles"
import type { GuardianResponse } from "./type"

const API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY

export const fetchGuardianApi = async ({
  signal,
  ...query
}: ExtendedArticleQueryParams) => {
  if (!API_KEY) throw Error("API_KEY not provided for The Guardian")

  const queryParams = buildGuardianQueryParams(query, API_KEY)
  const searchParams = new URLSearchParams(queryParams)

  const response = await fetch(`${URL_GUARDIAN_API}?${searchParams}`, {
    signal,
  })

  if (!response.ok)
    throw Error(`Failed to fetch: ${response.status} ${response.statusText}`)

  const rawNews: GuardianResponse = await response.json()
  return mapGuardianArticles(rawNews)
}
