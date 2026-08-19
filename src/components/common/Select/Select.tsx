import React, { useState, useRef, useEffect } from "react"
import cn from "classnames"
import { Icon } from "../Icon/Icon"
import styles from "./Select.module.css"

export interface Option<T extends string = string> {
  value: T
  label: string
}

export interface SelectProps<T extends string = string> {
  label?: string
  options: Option<T>[]
  value: T[]
  onChange: (value: T[]) => void
  placeholder?: string
  className?: string
  name: string
}

export const Select = <T extends string = string>({
  label,
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  name,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleToggle = () => setIsOpen(!isOpen)

  const handleSelect = (optionValue: T) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue))
    } else {
      onChange([...value, optionValue])
    }
  }

  const handleRemove = (e: React.MouseEvent, optionValue: T) => {
    e.stopPropagation()
    onChange(value.filter((v) => v !== optionValue))
  }

  const selectedOptions = options.filter((opt) => value.includes(opt.value))

  return (
    <div className={cn(styles.wrapper, className)} ref={containerRef}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div
        id={name}
        className={cn("form-control", styles.selectContainer, {
          "form-control-focus": isOpen,
        })}
        onClick={handleToggle}
      >
        <div className={styles.pillsContainer}>
          {selectedOptions.length === 0 ? (
            <span className={styles.placeholder}>{placeholder}</span>
          ) : (
            selectedOptions.map((opt) => (
              <span key={opt.value} className={styles.pill}>
                {opt.label}
                <button
                  className={styles.removeButton}
                  onClick={(e) => handleRemove(e, opt.value)}
                >
                  <Icon size={12} name="close" />
                </button>
              </span>
            ))
          )}
        </div>
        <span className={styles.chevron}>
          <Icon size={16} name="chevron-down" />
        </span>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((opt) => {
            const isSelected = value.includes(opt.value)
            return (
              <div
                key={opt.value}
                className={cn(styles.option, {
                  [styles.selectedOption]: isSelected,
                })}
                onClick={() => handleSelect(opt.value)}
              >
                <div className={styles.checkbox}>
                  {isSelected && <Icon size={12} name="check" />}
                </div>
                <span>{opt.label}</span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
