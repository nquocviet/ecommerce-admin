import React, { ErrorInfo } from 'react'

import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types'

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
