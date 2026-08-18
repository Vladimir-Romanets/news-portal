interface GuardianRawItem {
  id: string
  webTitle: string
  webUrl: string
  webPublicationDate: string
  sectionName?: string
  fields?: {
    headline?: string
    trailText?: string
    thumbnail?: string
    byline?: string
  }
}

export interface GuardianResponse {
  response: {
    results: GuardianRawItem[]
  }
}
