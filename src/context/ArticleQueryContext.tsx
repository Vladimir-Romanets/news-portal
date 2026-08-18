import { createContext, useState, type ReactNode } from "react"
import type { ArticleQueryParams } from "@/types/query.type"

interface ArticleQueryContextValue {
  params: ArticleQueryParams
  setParams: (params: ArticleQueryParams) => void
}

export const ArticleQueryContext =
  createContext<ArticleQueryContextValue | null>(null)

const DEFAULT_PARAMS: ArticleQueryParams = {
  category: "general",
  page: 1,
}

interface ArticleQueryProviderProps {
  children: ReactNode
}

export const ArticleQueryProvider = ({
  children,
}: ArticleQueryProviderProps) => {
  const [params, setParams] = useState<ArticleQueryParams>(DEFAULT_PARAMS)

  return (
    <ArticleQueryContext.Provider value={{ params, setParams }}>
      {children}
    </ArticleQueryContext.Provider>
  )
}
