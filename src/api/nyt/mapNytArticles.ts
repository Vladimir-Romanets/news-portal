import type { Article } from "@/types/article.type"
import type { NytResponse } from "./type"

export const mapNytArticles = (data: NytResponse): Article[] => {
  if (!data?.response?.docs) return []

  return data.response.docs.map((item) => ({
    id: item._id,
    title:
      (item.headline?.main || item.abstract)
        ?.replace(/<[^>]*>?/gm, "")
        .trim() || "Untitled",
    description: item.abstract || item.snippet || "",
    url: item.web_url,
    imageUrl:
      item.multimedia?.default?.url || item.multimedia?.thumbnail?.url || null,
    publishedAt: item.pub_date,
    source: {
      id: "nyt",
      name: "The New York Times",
    },
    author: item.byline?.original
      ? item.byline.original.replace(/^By\s+/i, "").trim()
      : null,
    category: item.section_name || null,
  }))
}
