import type { NewsCategory, NewsSourceId } from "@/types/query.type"

export interface SearchState {
  query: string
  fromDate: string
  toDate: string
  category: NewsCategory[]
  source: NewsSourceId[]
}

export type SearchAction =
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_FROM_DATE"; payload: string }
  | { type: "SET_TO_DATE"; payload: string }
  | { type: "SET_CATEGORY"; payload: NewsCategory[] }
  | { type: "TOGGLE_SOURCE"; payload: NewsSourceId }
  | { type: "RESET_FILTERS" }

export const initialState: SearchState = {
  query: "",
  fromDate: "",
  toDate: "",
  category: ["general"],
  source: ["guardian", "newsapi", "nyt"],
}

export const searchReducer = (
  state: SearchState,
  action: SearchAction,
): SearchState => {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload }
    case "SET_FROM_DATE":
      return { ...state, fromDate: action.payload }
    case "SET_TO_DATE":
      return { ...state, toDate: action.payload }
    case "SET_CATEGORY":
      return { ...state, category: action.payload }
    case "TOGGLE_SOURCE": {
      const isSelected = state.source.includes(action.payload)
      return {
        ...state,
        source: isSelected
          ? state.source.filter((s) => s !== action.payload)
          : [...state.source, action.payload],
      }
    }
    case "RESET_FILTERS":
      return initialState
    default:
      return state
  }
}

export const CATEGORY_OPTIONS: { value: NewsCategory; label: string }[] = [
  { value: "technology", label: "Technology" },
  { value: "general", label: "General" },
  { value: "business", label: "Business" },
  { value: "science", label: "Science" },
  { value: "entertainment", label: "Entertainment" },
  { value: "health", label: "Health" },
  { value: "sports", label: "Sports" },
]

export const SOURCE_OPTIONS: { id: NewsSourceId; label: string }[] = [
  { id: "newsapi", label: "NewsAPI" },
  { id: "guardian", label: "The Guardian" },
  { id: "nyt", label: "NYTimes" },
]
