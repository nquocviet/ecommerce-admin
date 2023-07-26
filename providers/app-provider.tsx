import { ReactNode } from 'react'
import { MantineProvider } from '@mantine/core'

import { ErrorBoundary } from '@/components'
import { COLORS_THEME } from '@/constants/colors'
import { components } from '@/constants/components'

type AppProviderProps = {
	children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<MantineProvider
			theme={{
				colors: COLORS_THEME,
				fontFamily: 'var(--ff-inter)',
				primaryColor: 'primary',
				components,
			}}
			withGlobalStyles
			withNormalizeCSS
		>
			<ErrorBoundary>{children}</ErrorBoundary>
		</MantineProvider>
	)
}

export default AppProvider
