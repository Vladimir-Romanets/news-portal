import { useContext } from "react"
import { ArticleQueryContext } from "@/context/ArticleQueryContext"
import type { ArticleQueryParams } from "@/types/query.type"

export const useArticleQuery = () => {
  const context = useContext(ArticleQueryContext)

  if (!context) {
    throw new Error("useArticleQuery must be used within ArticleQueryProvider")
  }

  const { params, setParams } = context

  const updateParams = (updates: Partial<ArticleQueryParams>) => {
    setParams({ ...params, ...updates })
  }

  return {
    params,
    setParams,
    updateParams,
  }
}
