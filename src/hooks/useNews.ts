import { startTransition, useActionState, useEffect, useRef } from "react"
import { apiClient, type NewsReturning } from "@/api/apiClient"
import type { ExtendedArticleQueryParams } from "@/types/query.type"

const initialState = {
  articles: [],
  errors: [],
}
export const useNews = () => {
  const abortHolder = useRef<AbortController | null>(null)

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
      runAction({ category: "general", signal: abortHolder.current?.signal }),
    )
  }, [])

  return {
    isLoading,
    ...state,
  }
}
