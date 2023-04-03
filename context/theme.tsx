import React, { ReactNode, useCallback, useEffect, useState } from 'react'

import { useLocalStorage } from '@/hooks'

type Theme = 'light' | 'dark'
type ThemeContext = {
	theme: Theme
	toggleTheme: () => void
}
interface ThemeProviderProps {
	children: ReactNode
}

const THEME_KEY = 'theme'
const defaultValue = 'light'

export const ThemeContext = React.createContext<ThemeContext>(
	{} as ThemeContext
)

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
	children,
}) => {
	const [theme, setTheme] = useState<Theme>(defaultValue)
	const [themeLocal, setThemeLocal] = useLocalStorage<Theme>(
		THEME_KEY,
		defaultValue
	)

	const themeSetter = useCallback(
		(theme: Theme) => {
			setTheme(theme)
			setThemeLocal(theme)
			document.documentElement.setAttribute('data-theme', theme)
		},
		[setThemeLocal]
	)

	useEffect(() => {
		if (theme !== themeLocal) {
			themeSetter(themeLocal)
		}
	}, [theme, themeLocal, themeSetter])

	const toggleTheme = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light'

		themeSetter(nextTheme)
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
