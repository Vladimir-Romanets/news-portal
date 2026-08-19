import { Component, type ReactNode, type ErrorInfo } from "react"
import { ErrorState } from "@/components/common/ErrorState/ErrorState"
import { Container } from "../layout"

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    //TODO: For production, consider connecting an error logging service here
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error?.message || "Unknown error"
      return (
        <Container>
          <ErrorState
            errors={[{ source: "ErrorBoundary", error: errorMessage }]}
          />
        </Container>
      )
    }

    return this.props.children
  }
}
