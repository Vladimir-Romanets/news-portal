import type { Article } from "@/types/article.type"

export const sortingHandler = (a: Article, b: Article) =>
  a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : 0
