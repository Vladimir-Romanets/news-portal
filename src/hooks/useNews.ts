import { startTransition, useActionState, useEffect, useRef } from "react"
import { apiClient, type NewsReturning } from "@/api/apiClient"
import type { ExtendedArticleQueryParams } from "@/types/query.type"
import { useArticleQuery } from "./useArticleQuery"

const initialState = {
  articles: [],
  errors: [],
}
export const useNews = () => {
  const abortHolder = useRef<AbortController | null>(null)

  const { params } = useArticleQuery()

  const [state, runAction, isLoading] = useActionState(
    (_: NewsReturning, payload: ExtendedArticleQueryParams) =>
      apiClient(payload),
    initialState,
  )

  useEffect(() => {
    if (abortHolder.current) {
      abortHolder.current.abort()
    }
    abortHolder.current = new AbortController()

    startTransition(() =>
      runAction({ ...params, signal: abortHolder.current?.signal }),
    )
  }, [params])

  return {
    isLoading,
    ...state,
  }
}
