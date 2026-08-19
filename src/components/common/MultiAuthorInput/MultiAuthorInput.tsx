import { useState, type KeyboardEvent } from "react"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import { Checkbox } from "../Checkbox/Checkbox"
import styles from "./MultiAuthorInput.module.css"

export interface MultiAuthorInputProps {
  values: string[]
  id: string
  label?: string
  onToggle: (author: string) => void
}

export const MultiAuthorInput = ({
  values,
  id,
  label,
  onToggle,
}: MultiAuthorInputProps) => {
  const [inputValue, setInputValue] = useState("")

  const handleAdd = (e?: React.MouseEvent | KeyboardEvent) => {
    if (e) e.preventDefault()
    const trimmed = inputValue.trim()
    if (trimmed && !values.includes(trimmed)) {
      onToggle(trimmed)
      setInputValue("")
    } else if (trimmed && values.includes(trimmed)) {
      setInputValue("")
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd(e)
    }
  }

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.groupLabel}>
          {label}
        </label>
      )}
      <div className={styles.inputGroup}>
        <Input
          id={id}
          name={id}
          placeholder="Enter author name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button type="button" variant="primary" onClick={handleAdd}>
          Add
        </Button>
      </div>
      {values.length > 0 && (
        <div className={styles.list}>
          {values.map((author) => (
            <div key={author} className={styles.item}>
              <Checkbox
                label={author}
                name={`author_${author}`}
                checked={true}
                onChange={() => onToggle(author)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
