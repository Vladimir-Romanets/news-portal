export interface Article {
  id: string
  title: string
  description: string
  url: string
  imageUrl: string | null
  publishedAt: string
  source: {
    id: "newsapi" | "guardian" | "nyt"
    name: string
  }
  author: string | null
  category: string | null
}
