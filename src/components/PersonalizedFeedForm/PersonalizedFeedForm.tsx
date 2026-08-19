import { useEffect, useReducer } from "react"
import { Select, Checkbox, Button, MultiAuthorInput } from "@/components/common"
import { useArticleQuery } from "@/hooks/useArticleQuery"
import { personalizedFeedReducer, buildInitState } from "./formState"
import { CATEGORY_OPTIONS, SOURCE_OPTIONS } from "@/constants/formOptions"
import { getFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage"
import styles from "./PersonalizedFeedForm.module.css"

export const PersonalizedFeedForm = () => {
  const [state, dispatch] = useReducer(
    personalizedFeedReducer,
    buildInitState(getFromLocalStorage()),
  )
  const { setParams } = useArticleQuery()

  useEffect(() => {
    setParams(state)
    saveToLocalStorage(state)
  }, [state, setParams])

  return (
    <div className={styles.personalizedFeedForm}>
      <p className={styles.title}>My Feed</p>

      <div className={styles.formGroup}>
        <p className={styles.groupLabel}>Source</p>
        <div className={styles.sourcesList}>
          {SOURCE_OPTIONS.map((sourceOption) => (
            <div key={sourceOption.id} className={styles.sourceItem}>
              <Checkbox
                label={sourceOption.label}
                name={`feed_${sourceOption.id}`}
                checked={state.source.includes(sourceOption.id)}
                onChange={() =>
                  dispatch({ type: "TOGGLE_SOURCE", payload: sourceOption.id })
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.formGroup}>
        <Select
          label="Category"
          name="feed_category"
          options={CATEGORY_OPTIONS}
          value={state.category || []}
          onChange={(val) => {
            dispatch({ type: "SET_CATEGORY", payload: val as any })
          }}
          placeholder="Select categories..."
        />
      </div>

      <div className={styles.formGroup}>
        <MultiAuthorInput
          id="feed_authors"
          label="Authors"
          values={state.author}
          onToggle={(author) =>
            dispatch({ type: "TOGGLE_AUTHOR", payload: author })
          }
        />
      </div>

      <div className={styles.submitGroup}>
        <Button
          variant="outline"
          fullWidth
          onClick={() => dispatch({ type: "RESET_FEED_FILTERS" })}
        >
          Reset Feed
        </Button>
      </div>
    </div>
  )
}
