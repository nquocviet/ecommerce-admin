import React, { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)

		this.state = { hasError: false }
	}

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log({ error, errorInfo })
	}

	render() {
		if (this.state.hasError) {
			return <p>Something went wrong. Please try again later</p>
		}

		return this.props.children
	}
}

export default ErrorBoundary
