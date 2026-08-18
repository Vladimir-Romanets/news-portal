import { createContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react"
import type { ArticleQueryParams } from "@/types/query.type"

interface ArticleQueryContextValue {
  params: ArticleQueryParams
  setParams: Dispatch<SetStateAction<ArticleQueryParams>>
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
