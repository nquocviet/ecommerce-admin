import React, { ReactNode } from 'react'
import { MantineProvider } from '@mantine/core'
import { ThemeProvider } from 'context/theme'

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
				primaryColor: 'primary',
				components,
			}}
			withGlobalStyles
			withNormalizeCSS
		>
			<ErrorBoundary>
				<ThemeProvider>{children}</ThemeProvider>
			</ErrorBoundary>
		</MantineProvider>
	)
}

export default AppProvider
