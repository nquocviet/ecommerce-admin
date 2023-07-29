import React from 'react'
import { Button, clsx, Text } from '@mantine/core'
import { MagnifyingGlass } from '@phosphor-icons/react'

interface AppSearchProps {
	className?: string
}

const AppSearch = ({ className }: AppSearchProps) => {
	return (
		<Button
			color="gray"
			variant="light"
			leftIcon={<MagnifyingGlass size={20} />}
			className={clsx('text-gray-400 child:!justify-start', className)}
		>
			<Text className="px-2 font-semibold">Ctrl K</Text>
			<Text className="font-regular">Search anything...</Text>
		</Button>
	)
}

export default AppSearch
