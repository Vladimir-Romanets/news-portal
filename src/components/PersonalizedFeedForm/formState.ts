import type { NewsCategory, NewsSourceId } from "@/types/query.type"

export interface PersonalizedFeedState {
  category: NewsCategory[]
  source: NewsSourceId[]
  author: string[]
}

export type PersonalizedFeedAction =
  | { type: "SET_CATEGORY"; payload: NewsCategory[] }
  | { type: "TOGGLE_SOURCE"; payload: NewsSourceId }
  | { type: "ADD_AUTHOR"; payload: string }
  | { type: "TOGGLE_AUTHOR"; payload: string }
  | { type: "RESET_FEED_FILTERS" }

const initialState: PersonalizedFeedState = {
  category: [],
  source: [],
  author: [],
}

export const buildInitState = (props: any): PersonalizedFeedState => {
  if (!props || typeof props !== "object" || Array.isArray(props))
    return initialState

  const newState = (
    Object.keys(initialState) as Array<keyof PersonalizedFeedState>
  ).reduce((prev, key) => {
    const incomeValue = props[key]
    prev[key] = (
      Array.isArray(incomeValue) ? incomeValue : initialState[key]
    ) as any

    return prev
  }, {} as PersonalizedFeedState)

  return newState
}

export const personalizedFeedReducer = (
  state: PersonalizedFeedState,
  action: PersonalizedFeedAction,
): PersonalizedFeedState => {
  switch (action.type) {
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
    case "ADD_AUTHOR": {
      const trimmed = action.payload.trim()
      if (!trimmed || state.author.includes(trimmed)) {
        return state
      }
      return {
        ...state,
        author: [...state.author, trimmed],
      }
    }
    case "TOGGLE_AUTHOR": {
      const isSelected = state.author.includes(action.payload)
      return {
        ...state,
        author: isSelected
          ? state.author.filter((a) => a !== action.payload)
          : [...state.author, action.payload],
      }
    }
    case "RESET_FEED_FILTERS":
      return initialState
    default:
      return state
  }
}
