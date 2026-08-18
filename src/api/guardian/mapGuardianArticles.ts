import type { Article } from "@/types/article.type"
import type { GuardianResponse } from "./type"

export const mapGuardianArticles = (data: GuardianResponse): Article[] => {
  if (!data?.response?.results) return []

  return data.response.results.map((item) => ({
    id: item.id,
    title: item.fields?.headline || item.webTitle,
    description: item.fields?.trailText?.replace(/<[^>]*>?/gm, "").trim() || "",
    url: item.webUrl,
    imageUrl: item.fields?.thumbnail || null,
    publishedAt: item.webPublicationDate,
    source: {
      id: "guardian",
      name: "The Guardian",
    },
    author: item.fields?.byline || null,
    category: item.sectionName || null,
  }))
}
