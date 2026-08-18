import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import styles from "./Select.module.css";

export interface Option<T extends string = string> {
  value: T;
  label: string;
}

export interface SelectProps<T extends string = string> {
  label?: string;
  options: Option<T>[];
  value: T[];
  onChange: (value: T[]) => void;
  placeholder?: string;
  className?: string;
  name: string;
}

export const Select = <T extends string = string>({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select...',
  className = '',
  name,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (optionValue: T) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const handleRemove = (e: React.MouseEvent, optionValue: T) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== optionValue));
  };

  const selectedOptions = options.filter((opt) => value.includes(opt.value));

  return (
    <div className={cn(styles.wrapper, className)} ref={containerRef}>
      {label && <label htmlFor={name} className={styles.label}>{label}</label>}
      <div
        id={name}
        className={cn("form-control", styles.selectContainer, { "form-control-focus": isOpen })}
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
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </span>
            ))
          )}
        </div>
        <span className={styles.chevron}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((opt) => {
            const isSelected = value.includes(opt.value);
            return (
              <div
                key={opt.value}
                className={cn(styles.option, { [styles.selectedOption]: isSelected })}
                onClick={() => handleSelect(opt.value)}
              >
                <div className={styles.checkbox}>
                  {isSelected && (
                    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span>{opt.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
