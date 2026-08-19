import { useEffect, useReducer } from "react"
import { Input, DatePicker, Select, Checkbox, Button } from "@/components/common"
import { useArticleQuery } from "@/hooks/useArticleQuery"
import {
  searchReducer,
  initialState,
} from "./formState"
import { CATEGORY_OPTIONS, SOURCE_OPTIONS, SORT_OPTIONS } from "@/constants/formOptions"
import styles from "./SearchForm.module.css"
import { useDebounce } from "@/hooks/useDebounce"

export const SearchForm = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState)
  const { setParams } = useArticleQuery()
  const debouncedQuery = useDebounce(state.query, 600)

  useEffect(() => {
    setParams({ ...state, query: debouncedQuery })
  }, [
    state.category,
    state.source,
    state.fromDate,
    state.toDate,
    state.sortBy,
    debouncedQuery,
  ])

  return (
    <div className={styles.searchForm}>
      <p className={styles.title}>Discover</p>

      <div className={styles.formGroup}>
        <Input
          label="Keyword Search"
          name="query"
          placeholder="Keyword Search"
          value={state.query}
          onChange={(e) =>
            dispatch({ type: "SET_QUERY", payload: e.target.value })
          }
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.groupLabel}>Date Range</label>
        <div className={styles.dateRange}>
          <DatePicker
            label="From"
            name="fromDate"
            value={state.fromDate}
            onChange={(e) =>
              dispatch({ type: "SET_FROM_DATE", payload: e.target.value })
            }
          />
          <DatePicker
            label="To"
            name="toDate"
            value={state.toDate}
            onChange={(e) =>
              dispatch({ type: "SET_TO_DATE", payload: e.target.value })
            }
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <Select
          label="Category"
          name="category"
          options={CATEGORY_OPTIONS}
          value={state.category || []}
          onChange={(val) => {
            dispatch({ type: "SET_CATEGORY", payload: val as any })
          }}
          placeholder="Select..."
        />
      </div>

      <div className={styles.formGroup}>
        <Select
          label="Sort By"
          name="sortBy"
          options={SORT_OPTIONS}
          value={state.sortBy ? [state.sortBy] : []}
          onChange={(val) => {
            const newValue = val.filter(v => v !== state.sortBy)[0] || state.sortBy || "newest";
            dispatch({ type: "SET_SORT_BY", payload: newValue as any })
          }}
          placeholder="Select sort order..."
        />
      </div>

      <div className={styles.formGroup}>
        <p className={styles.groupLabel}>Source</p>
        <div className={styles.sourcesList}>
          {SOURCE_OPTIONS.map((sourceOption) => (
            <div key={sourceOption.id} className={styles.sourceItem}>
              <Checkbox
                label={sourceOption.label}
                name={sourceOption.id}
                checked={state.source.includes(sourceOption.id)}
                onChange={() =>
                  dispatch({ type: "TOGGLE_SOURCE", payload: sourceOption.id })
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.submitGroup}>
        <Button
          variant="outline"
          fullWidth
          onClick={() => dispatch({ type: "RESET_FILTERS" })}
        >
          Reset Filter
        </Button>
      </div>
    </div>
  )
}
