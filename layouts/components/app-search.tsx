import React from 'react'
import { Button, clsx, Text } from '@mantine/core'
import { spotlight } from '@mantine/spotlight'
import { MagnifyingGlass } from '@phosphor-icons/react'

import { Spotlight } from '@/components'

interface AppSearchProps {
	className?: string
}

const AppSearch = ({ className }: AppSearchProps) => {
	return (
		<Spotlight>
			<Button
				color="gray"
				variant="light"
				leftIcon={<MagnifyingGlass size={20} />}
				className={clsx('text-gray-500 child:!justify-start', className)}
				onClick={() => spotlight.open()}
			>
				<Text className="px-2 font-semibold">Ctrl K</Text>
				<Text className="font-regular">Search anything...</Text>
			</Button>
		</Spotlight>
	)
}

export default AppSearch
