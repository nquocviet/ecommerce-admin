import { DeepPartial } from 'react-hook-form'
import { DefaultMantineColor, Tuple } from '@mantine/core'

type ColorsTheme = DeepPartial<Record<DefaultMantineColor, Tuple<string, 10>>>

const COLOR_KEYS = ['primary', 'gray', 'blue', 'red', 'yellow', 'green']
const COLOR_VARIANTS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const generateColors = (
	colors: string[],
	variants: number[]
): Record<string, string[]> => {
	return colors.reduce(
		(prev, curr) => ({
			...prev,
			[curr]: variants.map((variant) => `var(--${curr}-${variant})`),
		}),
		{}
	)
}

export const COLORS_THEME: ColorsTheme = {
	white: ['var(--white)'],
	black: ['var(--black)'],
	...generateColors(COLOR_KEYS, COLOR_VARIANTS),
}
