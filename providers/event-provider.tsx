import { createContext, ReactNode, useCallback } from 'react'

interface EventProviderProps {
	children: ReactNode
}

type EventContextValue = {
	onSubmit: (data) => void
}

export const EventContext = createContext<EventContextValue | null>(null)

const EventProvider = ({ children }: EventProviderProps) => {
	const onSubmit = useCallback((data) => console.log(data), [])

	return (
		<EventContext.Provider value={{ onSubmit }}>
			{children}
		</EventContext.Provider>
	)
}

export default EventProvider
