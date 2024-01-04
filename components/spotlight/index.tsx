import React, { useCallback, useState } from 'react'
import { Kbd } from '@mantine/core'
import { SpotlightProvider, SpotlightProviderProps } from '@mantine/spotlight'
import { MagnifyingGlass } from '@phosphor-icons/react'

import ActionsWrapper from '../actions-wrapper'

type SpotlightProps = Omit<SpotlightProviderProps, 'actions'>

const styles = {
	spotlight: () =>
		({
			body: {
				padding: 0,
			},
			searchInput: {
				fontSize: 'var(--fs-text-md)',
				boxShadow: 'none !important',
				'&:not([readonly]):focus': {
					borderBottomColor: 'var(--gray-200) !important',
				},
			},
			actionsGroup: {
				fontSize: 'var(--fs-text-sm)',
				textTransform: 'capitalize',
			},
		} as const),
}

const Spotlight = ({ children, ...props }: SpotlightProps) => {
	const [query, setQuery] = useState('')

	const renderActionsWrapper = useCallback(
		({ children }) => <ActionsWrapper>{children}</ActionsWrapper>,
		[]
	)

	return (
		<SpotlightProvider
			actions={[]}
			query={query}
			onQueryChange={setQuery}
			actionsWrapperComponent={renderActionsWrapper}
			searchIcon={<MagnifyingGlass size={20} />}
			searchPlaceholder="Start typing to search..."
			shortcut="ctrl + K"
			searchInputProps={{
				rightSection: <Kbd size="xs">Esc</Kbd>,
			}}
			styles={styles.spotlight}
			{...props}
		>
			{children}
		</SpotlightProvider>
	)
}

export default Spotlight
