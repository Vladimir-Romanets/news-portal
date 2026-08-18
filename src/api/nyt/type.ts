interface NytImageSpec {
  url: string
  height: number
  width: number
}

interface NytMultimedia {
  caption?: string
  credit?: string
  default?: NytImageSpec
  thumbnail?: NytImageSpec
}

interface NytRawItem {
  _id: string
  web_url: string
  snippet?: string
  abstract?: string
  headline?: {
    main?: string
    kicker?: string
  }
  pub_date: string
  section_name?: string
  byline?: {
    original?: string
  }
  multimedia?: NytMultimedia
}

export interface NytResponse {
  status: string
  response: {
    docs: NytRawItem[]
    metadata?: {
      hits: number
      offset: number
      time: number
    }
  }
}
