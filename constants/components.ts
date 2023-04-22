import { ActionIconStylesParams, ButtonStylesParams } from '@mantine/core'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const components: any = {
	Accordion: {
		styles: () => ({
			control: {
				paddingLeft: 0,
				paddingRight: 0,
				'&:hover': {
					backgroundColor: 'transparent',
				},
			},
			content: {
				paddingLeft: 0,
				paddingRight: 0,
			},
		}),
	},
	ActionIcon: {
		styles: (theme, params: ActionIconStylesParams, { variant, size }) => ({
			root: {
				...(size === 'lg' && { width: '2.25rem', height: '2.25rem' }),
				borderColor:
					params.color === 'gray' && variant === 'outline'
						? theme.colors.gray[3]
						: undefined,
				'&:active': {
					transform: 'unset',
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
	Checkbox: {
		styles: () => ({
			input: {
				cursor: 'pointer',
			},
			label: {
				cursor: 'pointer',
			},
		}),
	},
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
	Divider: {
		styles: (theme) => ({
			root: {
				borderTopColor: `${theme.colors.gray[2]} !important`,
			},
		}),
	},
	Dropzone: {
		styles: (theme) => ({
			root: {
				border: `1px dashed ${theme.colors.gray[3]}`,
			},
		}),
	},
	Modal: {
		styles: () => ({
			header: {
				padding: '1.5rem',
			},
			body: {
				padding: '1.5rem',
			},
			overlay: {
				backgroundColor: 'rgb(17, 24, 39, 0.4)',
			},
			title: {
				fontSize: 'var(--fs-text-xl)',
				fontWeight: 'var(--fw-semibold)',
			},
		}),
	},
	NumberInput: {
		styles: (theme) => ({
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
			input: {
				borderColor: theme.colors.gray[3],
				'&:focus': {
					boxShadow: '0 0 0 4px var(--primary-100)',
				},
				'&::placeholder': {
					color: theme.colors.gray[4],
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
	Radio: {
		styles: () => ({
			radio: {
				cursor: 'pointer',
			},
			label: {
				cursor: 'pointer',
			},
		}),
	},
	Select: {
		styles: (theme) => ({
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
			input: {
				borderColor: theme.colors.gray[3],
				'&:focus': {
					boxShadow: '0 0 0 4px var(--primary-100)',
				},
			},
		}),
	},
	Switch: {
		styles: () => ({
			track: {
				cursor: 'pointer',
			},
			label: {
				cursor: 'pointer',
			},
		}),
	},
	Table: {
		styles: () => ({
			root: {
				paddingBottom: 8,
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
	Textarea: {
		styles: (theme) => ({
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
			input: {
				borderColor: theme.colors.gray[3],
				'&:focus': {
					boxShadow: '0 0 0 4px var(--primary-100)',
				},
				'&::placeholder': {
					color: theme.colors.gray[4],
				},
			},
		}),
	},
	TextInput: {
		styles: (theme) => ({
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
			input: {
				borderColor: theme.colors.gray[3],
				'&:focus': {
					boxShadow: '0 0 0 4px var(--primary-100)',
				},
				'&::placeholder': {
					color: theme.colors.gray[4],
				},
			},
		}),
	},
	Tooltip: {
		styles: () => ({
			tooltip: {
				fontSize: 'var(--fs-text-sm)',
			},
		}),
	},
}
