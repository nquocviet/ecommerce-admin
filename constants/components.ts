import { ButtonStylesParams } from '@mantine/core'

export const components: any = {
	Container: {
		styles: (theme) => ({
			root: {
				[`@media (max-width: ${theme.breakpoints.sm})`]: {
					paddingLeft: 0,
					paddingRight: 0,
				},
			},
		}),
	},
	Button: {
		styles: (theme, params: ButtonStylesParams, { variant }) => ({
			root: {
				textTransform: 'capitalize',
				borderColor:
					params.color === 'gray' && variant === 'outline'
						? theme.colors.gray[3]
						: undefined,
				'&:active': {
					transform: 'unset',
				},
			},
			leftIcon: {
				color:
					params.color === 'gray' && variant === 'outline'
						? theme.colors.black
						: undefined,
			},
		}),
	},
	Input: {
		styles: (theme) => ({
			input: {
				borderColor: theme.colors.gray[3],
				'&:focus': {
					boxShadow: '0 0 0 4px var(--primary-100)',
				},
			},
		}),
	},
	ActionIcon: {
		styles: () => ({
			root: {
				'&:active': {
					transform: 'unset',
				},
			},
		}),
	},
	Tabs: {
		styles: (theme) => ({
			root: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
				height: '100%',
			},
			tab: {
				color: theme.colors.gray[4],
				padding: '0 0.375rem 0.875rem',
				'&:hover': {
					backgroundColor: 'transparent',
				},
				'&[data-active]': {
					color: theme.colors.gray[8],
				},
			},
			tabsList: {
				borderColor: theme.colors.gray[2],
				gap: '0.5rem',
			},
			tabLabel: {
				fontSize: 'var(--fs-text-md)',
				fontWeight: 'var(--fw-semibold)',
			},
			panel: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
				paddingTop: '2rem !important',
				flexGrow: 1,
			},
		}),
	},
	Table: {
		styles: () => ({
			root: {
				minWidth: 750,
				'& tr th:first-of-type': {
					paddingLeft: 0,
				},
				'& tr td:first-of-type': {
					paddingLeft: 0,
				},
				'& tr th:last-of-type': {
					paddingRight: 0,
				},
				'& tr td:last-of-type': {
					paddingRight: 0,
				},
			},
		}),
	},
	Pagination: {
		styles: (theme) => ({
			control: {
				borderColor: theme.colors.gray[3],
				'&:active': {
					transform: 'unset !important',
				},
			},
		}),
	},
}