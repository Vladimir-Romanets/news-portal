import { useEffect } from "react"
import { apiClient } from "./lib/requests/apiClient"

const App = () => {
  const request = async () => {
    apiClient({ sortBy: "newest" })
  }

  useEffect(() => {
    request()
  }, [])
  return <h1>Main content will be added here</h1>
}

export default App
