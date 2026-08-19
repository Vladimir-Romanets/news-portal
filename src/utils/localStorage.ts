import { LS_KEY_NAME } from "../constants/localStorageKey"

export const saveToLocalStorage = <T>(data: T): void => {
  try {
    localStorage.setItem(LS_KEY_NAME, JSON.stringify(data))
  } catch (error) {
    console.error("Error saving to localStorage", error)
  }
}

export const getFromLocalStorage = <T>(): T | null => {
  try {
    const data = localStorage.getItem(LS_KEY_NAME)
    const x = data ? JSON.parse(data) : null
    console.log(x)
    return x
  } catch (error) {
    console.error("Error reading from localStorage", error)
    return null
  }
}
