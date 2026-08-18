import type { Article } from "@/types/article.type"
import type { NewsApiResponse } from "./type"

export const mapNewsApiArticles = (data: NewsApiResponse): Article[] => {
  if (!data?.articles) return []

  return data.articles
    .filter((item) => item.title && item.title !== "[Removed]")
    .map((item) => ({
      id: item.url,
      title: item.title,
      description: item.description || "",
      url: item.url,
      imageUrl: item.urlToImage?.startsWith("http") ? item.urlToImage : null,
      publishedAt: item.publishedAt,
      source: {
        id: "newsapi",
        name: item.source.name || "NewsAPI",
      },
      author: item.author || null,
      category: null,
    }))
}
